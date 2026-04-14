# -*- coding: utf-8 -*-
# Build Blogger embed HTML (CDN + scoping + IIFE + unicode escape)
import re, io

CDN = "https://cdn.jsdelivr.net/gh/Byungyeon/matgo@main/cards/"
BASE = "D:/temp/matgo"

# 공통 ID 리네임 (Blogger 템플릿 충돌 방지)
ID_MAP = {
    "app": "m-app",
    "field": "m-field",
    "deck": "m-deck",
    "flip": "m-flip",
    "message": "m-message",
    "modal": "m-modal",
    "modal-title": "m-modal-title",
    "modal-body": "m-modal-body",
    "modal-actions": "m-modal-actions",
    "reset": "m-reset",
    "rules-btn": "m-rules-btn",
    "turn-name": "m-turn-name",
    "turn-info": "m-turn-info",
    "round-info": "m-round-info",
    "deck-count": "m-deck-count",
    "opp-score": "m-opp-score",
    "me-score": "m-me-score",
    "opp-captured": "m-opp-captured",
    "me-captured": "m-me-captured",
    "opp-hand": "m-opp-hand",
    "my-hand": "m-my-hand",
    "bomb-pass-wrap": "m-bomb-pass-wrap",
    "bomb-pass-btn": "m-bomb-pass-btn",
    "bomb-pass-count": "m-bomb-pass-count",
}

def rename_ids(text):
    # 더 긴 ID 먼저 치환 (부분 겹침 방지)
    for old in sorted(ID_MAP, key=len, reverse=True):
        new = ID_MAP[old]
        # id="xxx"
        text = re.sub(r'id="' + re.escape(old) + r'"', 'id="' + new + '"', text)
        # getElementById('xxx') / ("xxx")
        text = re.sub(r"getElementById\(\s*(['\"])" + re.escape(old) + r"\1\s*\)",
                      lambda m: "getElementById(" + m.group(1) + new + m.group(1) + ")", text)
        # getElementById(who + '-captured') 형식은 새 prefix로 처리되도록 별도
    return text

# JS 내 동적 ID 조립 대응: `who + '-captured'` → `'m-' + who + '-captured'`
def fix_dynamic_ids(js):
    js = js.replace("who + '-captured'", "'m-' + who + '-captured'")
    js = js.replace("who + '-score'", "'m-' + who + '-score'")
    return js

def escape_non_ascii(s):
    out = []
    for ch in s:
        o = ord(ch)
        if o < 128:
            out.append(ch)
        else:
            out.append("\\u%04x" % o)
    return "".join(out)

def find_matching_brace(text, open_idx):
    depth = 0
    i = open_idx
    while i < len(text):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1

def scope_css(css):
    text = css
    out = []
    pos = 0
    while pos < len(text):
        brace = text.find("{", pos)
        if brace == -1:
            out.append(text[pos:])
            break
        selector = text[pos:brace].strip()
        close = find_matching_brace(text, brace)
        if close == -1:
            out.append(text[pos:])
            break
        body = text[brace:close+1]

        if selector.startswith("@media"):
            inner = text[brace+1:close]
            inner_scoped = scope_css(inner)
            out.append(selector + " {\n" + inner_scoped + "\n}\n")
            pos = close + 1
            continue
        if selector.startswith("@"):
            out.append(text[pos:close+1] + "\n")
            pos = close + 1
            continue

        parts = [s.strip() for s in selector.split(",")]
        new_parts = []
        for p in parts:
            if not p:
                continue
            if p in ("html", "body", "*") or p.startswith("html ") or p.startswith("body "):
                new_parts.append("#m-app")
            elif p.startswith("#m-app"):
                new_parts.append(p)
            else:
                new_parts.append("#m-app " + p)
        new_selector = ", ".join(new_parts)
        out.append(new_selector + " " + body + "\n")
        pos = close + 1

    return "".join(out)


def main():
    # 1. 파일 읽기
    with open(BASE + "/index.html", "r", encoding="utf-8") as f: html = f.read()
    with open(BASE + "/style.css", "r", encoding="utf-8") as f: css = f.read()
    with open(BASE + "/game.js", "r", encoding="utf-8") as f: js = f.read()

    # 2. 카드 경로 → CDN URL
    js = js.replace("'cards/'", "'" + CDN + "'")
    # cardFile 함수: 'cards/' + name → CDN + name
    # 이미 위 치환으로 OK

    # 3. ID 리네임
    html = rename_ids(html)
    js = rename_ids(js)
    js = fix_dynamic_ids(js)

    # 4. CSS 스코핑
    css = scope_css(css)

    # 5. body 래퍼 추출: <body>...</body> 내부만 사용
    m = re.search(r"<body[^>]*>(.*?)</body>", html, re.S)
    body = m.group(1) if m else html
    # <script src="game.js"></script> 제거
    body = re.sub(r'<script src="game\.js"></script>', "", body)
    # <link rel="stylesheet" href="style.css"> 이건 head에 있으니 body엔 없음

    # 6. JS 내부 비-ASCII 이스케이프
    js_escaped = escape_non_ascii(js)

    # 7. IIFE 래핑
    js_wrapped = "(function(){\n" + js_escaped + "\n})();"

    # 8. 최종 HTML 조립
    out = (
        "<style>\n" + css + "\n</style>\n"
        + body.strip() + "\n"
        + "<script>\n" + js_wrapped + "\n</script>\n"
    )

    with open(BASE + "/blog_matgo.html", "w", encoding="utf-8") as f:
        f.write(out)

    print("built: blog_matgo.html (%d KB)" % (len(out) // 1024))

if __name__ == "__main__":
    main()

# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, "D:/temp/blogger")
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

BLOG_ID = "3186533288993230994"
POST_ID = "2960051827888274852"

NEW_TITLE = chr(0xBB34) + chr(0xB8CC) + chr(0xB85C) + " " + chr(0xD50C) + chr(0xB808) + chr(0xC774) + "! " \
    + chr(0xD55C) + chr(0xAD6D) + " " + chr(0xB9DE) + chr(0xACE0) + "(" + chr(0xACE0) + chr(0xC2A4) + chr(0xD0D1) + ") HTML5 " \
    + chr(0xAC8C) + chr(0xC784)
# = "무료로 플레이! 한국 맞고(고스톱) HTML5 게임"

with open("D:/temp/matgo/blog_matgo.html", "r", encoding="utf-8") as f:
    content = f.read()

# Correct codepoints: 띠=0xB760, 몽=0xBABD, 뻑=0xBED1
TI = chr(0xB760)
MONG = chr(0xBABD)
PPEOK = chr(0xBED1)

intro = (
    "<p>\uc544\ub798 \uac8c\uc784\uc740 \ud55c\uad6d \ub9de\uace0(\uace0\uc2a4\ud0d1)\uc744 \uad6c\ud604\ud55c HTML5 \uac8c\uc784\uc785\ub2c8\ub2e4. "
    "\uad11/" + TI + "/" + MONG + "(\ub3d9\ubb3c)/\ud53c \uc810\uc218 \uacc4\uc0b0, \uace0/\uc2a4\ud0d1 \uc120\ud0dd, "
    + PPEOK + "/\ud754\ub4e4\uae30/\ud3ed\ud0c4/\ucabd/\ub530\ub2e5 \ub4f1 \uc8fc\uc694 \uc774\ubca4\ud2b8\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. "
    "\uac8c\uc784 \uc0c1\ub2e8\uc758 <b>\uaddc\uce59</b> \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc0c1\uc138 \ub8f0\uc744 \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</p>"
)

outro = (
    "<hr><p style='font-size:12px;color:#888'>\uce74\ub4dc \uc774\ubbf8\uc9c0: "
    "<a href='https://commons.wikimedia.org/wiki/Category:SVG_Hwatu' target='_blank'>Wikimedia Commons SVG Hwatu</a> "
    "by Spen\u0109jo / Marcus Richert, "
    "<a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>CC BY-SA 4.0</a>. "
    "\uac8c\uc784 \uc18c\uc2a4: <a href='https://github.com/Byungyeon/matgo' target='_blank'>github.com/Byungyeon/matgo</a></p>"
)

full_content = intro + content + outro

# Sanity check: no 띄/몹/뽥
for bad, name in [(chr(0xB744),'TI_WRONG'),(chr(0xBAB9),'MONG_WRONG'),(chr(0xBF65),'PPEOK_WRONG')]:
    if bad in full_content:
        print("WARN:", name, "found in content")

creds = Credentials.from_authorized_user_file("D:/temp/blogger/token.json",
    ["https://www.googleapis.com/auth/blogger"])
svc = build("blogger", "v3", credentials=creds)

cur = svc.posts().get(blogId=BLOG_ID, postId=POST_ID).execute()
cur["title"] = NEW_TITLE
cur["content"] = full_content
res = svc.posts().update(blogId=BLOG_ID, postId=POST_ID, body=cur).execute()
print("Updated:", res.get("url"))

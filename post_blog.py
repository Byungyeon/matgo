# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, "D:/temp/blogger")
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

BLOG_ID = "3186533288993230994"
TITLE = "\ubb34\ub8cc\ub85c \ud50c\ub808\uc774! \ud55c\uad6d \ub9de\uace0(\uace0\uc2a4\ud0d1) HTML5 \uac8c\uc784 \u2014 \ud48d\ub8f0 \ube0c\ub77c\uc6b0\uc800 \ubc84\uc804"
LABELS = ["\uac8c\uc784", "\ub9de\uace0", "\uace0\uc2a4\ud0d1", "HTML5", "\ud654\ud22c"]

with open("D:/temp/matgo/blog_matgo.html", "r", encoding="utf-8") as f:
    content = f.read()

# 서두 설명 + 게임 + 출처/규칙 안내
intro = (
    "<p>\ubcf4\uace0 \uc788\ub294 \uc544\ub798 \uac8c\uc784\uc740 \ud55c\uad6d \ub9de\uace0(\uace0\uc2a4\ud0d1) \ud48d\ub8f0\uc744 \uad6c\ud604\ud55c HTML5 \uac8c\uc784\uc785\ub2c8\ub2e4. "
    "\uad11/\ub744/\ubab9(\ub3d9\ubb3c)/\ud53c \uc810\uc218 \uacc4\uc0b0, \uace0/\uc2a4\ud0d1 \uc120\ud0dd, \ubf65/\ud754\ub4e4\uae30/\ud3ed\ud0c4/\ucabd/\ub530\ub2e5 \ub4f1 \uc8fc\uc694 \uc774\ubca4\ud2b8\ub97c \ubaa8\ub450 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. "
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

creds = Credentials.from_authorized_user_file("D:/temp/blogger/token.json",
    ["https://www.googleapis.com/auth/blogger"])
svc = build("blogger", "v3", credentials=creds)

body = {"kind": "blogger#post", "title": TITLE, "content": full_content, "labels": LABELS}
res = svc.posts().insert(blogId=BLOG_ID, body=body, isDraft=True).execute()
print("Draft created")
print("Post ID:", res["id"])
print("URL:", res.get("url", "(draft)"))

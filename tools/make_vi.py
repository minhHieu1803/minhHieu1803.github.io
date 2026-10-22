"""Build vi/index.html from index.html.

GitHub Pages has no URL rewrites, so the Vietnamese page at /vi/ is a copy of index.html with the
language, title and description switched. The page content holds both languages; the inline script
picks one from the URL. Run this after every change to index.html:

    python tools/make_vi.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = [
    ('<html lang="en" data-lang="en">', '<html lang="vi" data-lang="vi">'),
    ("<title>Pham Minh Hieu · Python Backend Developer</title>",
     "<title>Phạm Minh Hiếu · Lập trình viên Python Backend</title>"),
    ('<meta name="description" content="Portfolio of Pham Minh Hieu, a fresher Python backend developer and M.Sc. IT candidate at HUTECH. FastAPI, background jobs, computer vision and automated testing.">',
     '<meta name="description" content="Portfolio của Phạm Minh Hiếu, lập trình viên Python Backend (Fresher), học viên Thạc sĩ CNTT tại HUTECH. FastAPI, tác vụ nền, thị giác máy tính và kiểm thử tự động.">'),
    ('<meta property="og:title" content="Pham Minh Hieu · Python Backend Developer">',
     '<meta property="og:title" content="Phạm Minh Hiếu · Lập trình viên Python Backend">'),
    ('<meta property="og:description" content="Fresher Python backend developer. Master\'s thesis: a FastAPI service that runs a video emotion-recognition pipeline as background jobs.">',
     '<meta property="og:description" content="Lập trình viên Python Backend (Fresher). Luận văn thạc sĩ: dịch vụ FastAPI chạy pipeline nhận dạng cảm xúc từ video dưới dạng tác vụ nền.">'),
]


def main() -> None:
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    for old, new in REPLACEMENTS:
        if html.count(old) != 1:
            raise SystemExit(f"expected exactly one match in index.html for: {old[:70]}")
        html = html.replace(old, new)
    out = ROOT / "vi" / "index.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(html, encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

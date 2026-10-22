# minhhieu1803.github.io

Personal portfolio of **Pham Minh Hieu**, fresher Python backend developer and M.Sc. IT candidate at HUTECH.

Live site: https://minhhieu1803.github.io/ (add `?lang=vi` for the Vietnamese version)

## What's inside

- A case study of my master's thesis: a FastAPI service that runs a video emotion-recognition pipeline as
  background jobs, with the architecture, engineering decisions and benchmark results.
- Skills, education and contact details.
- My CV in English and Vietnamese (`cv/`).
- English / Vietnamese switch, light and dark themes, works on phones.

## Stack

Plain HTML, CSS and JavaScript. No framework and no build step. Fonts from Google Fonts.

```
index.html          the page (both languages, switched with the lang attribute)
assets/css/style.css
assets/js/main.js   language switch and copy-to-clipboard
assets/favicon.svg
cv/                 CV PDFs
```

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy

GitHub Pages publishes the `main` branch of this repository automatically.

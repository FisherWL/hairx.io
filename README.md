# HairX official website

The official website for HairX LLC and the HairX salon consultation app,
published at [hairx.io](https://hairx.io).

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run build:pages
node --test tests/rendered-html.test.mjs
```

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` exports the site and
publishes it to GitHub Pages after a push to `main` or `master`. The custom
domain is configured through `public/CNAME`.

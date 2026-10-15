# Elena Beretta — personal academic website (static site v4 — Geist techno editorial)

A working, responsive static-site prototype based on the approved dark editorial visual direction.

## Open / preview

Open `index.html` in your browser, or serve the folder locally:

```sh
cd elena-beretta-site
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. No build system or package installation is needed.

## Sections

- `index.html` — homepage with collage, three research themes, two Unpacked stories, selected publications and the only Let’s Connect block
- `research.html` — questions and research themes
- `publications.html` — publications with working search and topic filters
- `teaching.html` — teaching, featuring the verified VU Ethical AI course
- `unpacked.html` — accessible science writing with working search and filters
- `article.html?slug=...` — full article view; linked academic sources
- `about.html` — professional biography
- `beyond.html` — topics for public talks and workshops (suggested, not past claims)

The global search, mobile navigation, publication/article filters, and article linking are interactive.

## Editing content

All text and article/publication data lives in `assets/js/content.js`. Page structures live in `assets/js/site.js` and all styling in `assets/css/styles.css`. The site language is currently English.

Update the `identity` object (contact, profile links), `topics`, `papers` and `articles` arrays as needed. Publications are a **selected** list, not a complete bibliography.

## IMPORTANT — before putting the site online

1. **Replace portrait image.** `assets/images/hero-collage.webp` is a cropped image of an earlier AI-generated design mockup, featuring **a fictional person**, not Elena. Replace with a portrait that Elena has rights to use, then adapt the collage treatment.
2. **Approve content.** All Unpacked articles are explicitly labelled drafts/editorial concepts. They were written for this prototype and must be checked, edited and approved. Do not present them as previously published articles or as verified research results.
3. **Review details.** Publications, years, DOI links, assistant professorship, official profile, email and Ethical AI course were checked against the VU Research Portal as of 14 Oct 2026. Review completeness and wording before launch.
4. **Choose a domain and hosting.** GitHub Pages, Netlify and Cloudflare Pages can serve this folder without a build command. Upload the *contents* of this directory, with `index.html` at the root.
5. **SEO and accessibility.** The site includes basic metadata, focus states, alt text and reduced-motion support. For production, consider prerendering pages, updating social sharing images, and running a full accessibility audit.
6. **Fonts.** Google Fonts is optional; offline fallback fonts are provided. No analytics or cookies are configured.

## Verified source links

- <https://research.vu.nl/en/persons/elena-beretta/>
- <https://studiegids.vu.nl/en/courses/2026-2027/XB_0143>
- DOI links for each paper are in `assets/js/content.js`.

## Visual assets

The hero and hand collages were cropped from earlier design images approved for exploration in this conversation. SVG artworks were drawn programmatically specifically for this site. They are local assets, not hotlinked. `make_assets.py` reproduces the asset-generation steps only if the original screenshot remains available at the expected path; the site itself does not depend on that script.

## GitHub Pages deployment (no build step)

1. Create a GitHub repository, e.g. `elena-beretta.github.io` (user site) or `academic-website` (project site).
2. Upload the **contents** of this folder to the repository root, including `index.html`, `assets/`, and `.nojekyll`.
3. In repository Settings > Pages, select **Deploy from a branch**, `main`, `/(root)` and Save.
4. The site will be available at `https://USERNAME.github.io/` for a user repository, or `https://USERNAME.github.io/academic-website/` for a project repository. All internal links are relative and support both forms.
5. To update research, papers or explainers, edit `assets/js/content.js` and commit.

## ERC-focused public positioning

New pages: `trajectory.html` explains the intellectual progression from fairness and representation to sequential evidence and decision processes; `leadership.html` highlights doctoral supervision, teaching and scientific exchange. These pages are meant to establish an independently credible PI profile, **not** to publish the confidential ERC proposal. Do not upload B1/B2 drafts, budgets, unpublished hypotheses or reviewer feedback.

The site does not claim an ERC grant has been awarded or that proposed CEPATH results already exist. Review all public claims and confirm roles before publishing.

## ERC-oriented content revision — 14 October 2026

- Added `academic-cv.html`, with a curated academic narrative and official-profile link.
- Strengthened leadership content with visiting research fellows and NWO-supported scientific meeting topics. Exact dates and grant identifiers remain unverified and are not invented.
- Updated biography and research framing for a general computer-science audience.
- The public website deliberately does **not** publish CEPATH B1/B2 proposal text or claim that proposed work has already been completed.
- Edit copy in `assets/js/site.js`, and papers/Unpacked in `assets/js/content.js`. Commit and push from VS Code; GitHub Pages deploys the updated static files automatically.

## V4 — Navigation & typography (15 Oct 2026)

- **Geist** is the primary typeface throughout; **Geist Mono** is used for metadata, section indices and micro labels. Fonts are loaded through Google Fonts, with system fallbacks. No build step.
- Top-level navigation is limited to **Research / Publications / Teaching / Unpacked / About**.
- From **Research** follow the link to `trajectory.html`; from **About** follow the links to `academic-cv.html`, `leadership.html` and `beyond.html`. The subpages also provide a parent breadcrumb.
- The homepage no longer repeats the top-level navigation as four quick cards. `Let's Connect` only appears on the homepage.
- Edit design in `assets/css/styles.css`, especially the final `V4 — TECHNO EDITORIAL` section. Edit navigation and page composition in `assets/js/site.js`.

To view locally use VS Code Live Server or `python3 -m http.server 8000`; upload the **contents** of this directory to the root of your GitHub Pages repository.

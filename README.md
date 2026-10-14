# Elena Beretta — personal academic website (prototype v1)

A working, responsive static-site prototype based on the approved dark editorial visual direction.

## Open / preview

Open `index.html` in your browser, or serve the folder locally:

```sh
cd elena-beretta-site
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. No build system or package installation is needed.

## Sections

- `index.html` — homepage with collage, research themes, Unpacked feature, selected publications
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

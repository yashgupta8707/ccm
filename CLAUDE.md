# City College of Management — Website Rebuild

You are building the new website for **City College of Management (CCM)**, Chinhat, Lucknow — a unit of City Group of Colleges (cgclko.com). It replaces the current site at citycollegemanagement.com.

**`BLUEPRINT.md` in this folder is the source of truth.** It holds the Key Facts, sitemap, navbar, footer, sitewide SEO rules, and for every page: URL, meta title, meta description, H1, sections and the full copy. Use its copy as written. Do not invent facts, numbers, names, fees or claims that are not in it.

## Decisions already made

- **Stack:** static site, no React. Use **Eleventy (11ty)** with Nunjucks templates, so header, footer and the programme template are written once and the build outputs plain `.html`. Vanilla CSS and a small amount of vanilla JS only. No CSS framework unless asked.
- **Data:** put Key Facts in `src/_data/site.json` and the seven programmes in `src/_data/programmes.json`. Every page, the footer and the JSON-LD read from these files — never hard-code a phone number, address or fact in a template.
- **Navbar:** flat, no dropdowns. Home · About · Courses · Admissions · Campus Life · Placements · Contact + an **Apply Now** button. Founder's and Director's messages live inside the About page (sticky in-page sub-menu), not in the navbar.
- **Pages:** all 22 indexable pages in the blueprint's sitemap, plus `/thank-you` (`noindex`). Programme pages are generated from one template + `programmes.json`. News & Events and Blog are Eleventy collections from Markdown files in `src/news/` and `src/blog/` — create 2–3 sample posts each.
- **URLs:** clean folder URLs (`/courses/bba/`), lowercase, hyphenated.

## Design

- Modern, clean, trustworthy college look; smooth, subtle transitions (CSS transitions, scroll-reveal via `IntersectionObserver`). Respect `prefers-reduced-motion`. Content must be visible without JavaScript.
- **Fully responsive, mobile-first** (breakpoints ~640 / 768 / 1024 / 1280px), fluid type with `clamp()`. Hamburger menu on mobile, plus a fixed bottom bar on mobile: Call · WhatsApp · Apply.
- Accessible: semantic HTML, one H1 per page, proper heading order, visible focus states, AA contrast.
- Define colours, spacing and type as CSS custom properties in one file so the brand can be changed later.

## SEO (apply on every page — details in BLUEPRINT.md "Sitewide SEO setup")

- Unique `<title>`, meta description, canonical, Open Graph and Twitter tags from each page's front matter, using the exact values in the blueprint.
- JSON-LD: `CollegeOrUniversity` (home, about, contact), `Course` (programme pages), `FAQPage` (pages with FAQs), `BreadcrumbList` (inner pages), `Article` (blog posts), `Event` (event posts).
- Generate `sitemap.xml` and `robots.txt` at build time.
- Images: `loading="lazy"` (except the hero), width/height set, descriptive alt text naming the college and subject.
- Add an `.htaccess` with 301 redirects from the old URLs: `index.html`, `about.html`, `course.html`, `beyond-academics.html`, `faculty.html`, `contact.html`, `founder-message.html`, `director-message.html`, `online_registration.php` → their new pages.

## Placeholders

- **Text:** keep every `[square-bracket placeholder]` from the blueprint visible in the output (style them with a subtle highlight class `.ph` so they are easy to spot and replace).
- **Images:** use free online placeholder images, all defined in one file `src/_data/images.json` (key → URL + alt) so they can be swapped later. Use Unsplash image URLs of campus, classrooms, students, labs, libraries and fields, or `https://picsum.photos/seed/<name>/<w>/<h>` as a fallback. Logo: a simple text/SVG placeholder.
- **Forms:** the enquiry/application forms submit to a placeholder endpoint set in `site.json` (`formEndpoint`). Client-side validation only; redirect to `/thank-you` on success. Programme dropdown lists all seven programmes.

## Accuracy notes

- Undergraduate programmes (BBA, BCA, B.Com, B.Sc Agriculture) are **affiliated to the University of Lucknow**.
- B.Ed, M.Ed, D.El.Ed are **recognised by NCTE** — write "Recognised by NCTE", never "affiliated to NCTE". Their affiliating body stays a placeholder.
- Established 2008. Years of service are computed from 2008 at build time.

## Workflow

1. Scaffold the Eleventy project and data files; show the folder structure.
2. Build the base layout (head/SEO partial, header, footer, mobile bar), then Home, then the remaining pages.
3. Run the build, fix any errors, and check every page has its title, description, H1 and JSON-LD.
4. Write a short `README.md`: how to run (`npm install`, `npm run dev`, `npm run build`), where to edit facts, images and posts, and how to deploy the `_site` folder.

# City College of Management — website

The new website for **City College of Management**, Tiwariganj, Faizabad Road,
Chinhat, Lucknow — a unit of City Group of Colleges. It replaces the old site at
citycollegemanagement.com.

It is a **static site built with [Eleventy](https://www.11ty.dev/)** (Nunjucks
templates, vanilla CSS, a little vanilla JavaScript). The build outputs plain
HTML into `_site/`, which can be uploaded to any web host — no Node.js, no
database and no PHP are needed on the server.

All page copy comes from `BLUEPRINT.md`, which remains the source of truth.

---

## Run it

```bash
npm install      # once
npm run dev      # local server with live reload, http://localhost:8080
npm run build    # production build into _site/
npm run clean    # delete _site/
```

Requires Node.js 18 or newer.

---

## What is where

```
ccm-website/
├── BLUEPRINT.md            Content source of truth (copy, SEO, structure)
├── CLAUDE.md               Build brief
├── .eleventy.js            Eleventy config: collections, filters, markdown
├── package.json
└── src/
    ├── _data/              ← EDIT FACTS HERE
    │   ├── site.json         Name, address, phones, email, session, socials…
    │   ├── programmes.json   All seven programmes (drives 7 pages + menus)
    │   ├── images.json       Every image on the site: key → url + alt
    │   ├── nav.json          Navbar and footer link lists
    │   └── now.js            Current year and years-of-service (computed)
    ├── _includes/
    │   ├── layouts/
    │   │   ├── base.njk        <head>, header, footer, scripts
    │   │   ├── page.njk        Standard page (breadcrumb, page head, FAQs, CTA)
    │   │   ├── programme.njk   The one template behind all 7 course pages
    │   │   └── post.njk        News and blog posts
    │   └── partials/
    │       ├── head.njk        Title, description, canonical, OG, Twitter
    │       ├── schema.njk      All JSON-LD
    │       ├── header.njk      Top bar + navbar + mobile menu
    │       ├── footer.njk      Footer + fixed mobile Call/WhatsApp/Apply bar
    │       ├── breadcrumb.njk, faqs.njk, cta.njk, form.njk
    ├── assets/
    │   ├── css/style.css     All styling; brand tokens at the top
    │   ├── js/main.js        Menu, scroll reveal, filters, lightbox, forms
    │   ├── img/logo.svg      Placeholder logo
    │   └── docs/             ← PUT PDFs HERE (see docs/README.txt)
    ├── courses/
    │   ├── index.njk         /courses/
    │   └── programme.njk     Generates /courses/<slug>/ for each programme
    ├── news/                 ← News & Events posts (Markdown)
    ├── blog/                 ← Blog posts (Markdown)
    ├── index.njk             Home
    ├── about.njk, admissions.njk, campus-life.njk, gallery.njk,
    │   placements.njk, news-events.njk, blog.njk, contact.njk,
    │   mandatory-disclosure.njk, student-welfare.njk, privacy-policy.njk,
    │   terms.njk, refund-policy.njk, thank-you.njk, 404.njk
    ├── sitemap.njk           → /sitemap.xml
    ├── robots.njk            → /robots.txt
    └── .htaccess             301 redirects from the old URLs + caching
```

The build produces **22 indexable pages**, plus `/thank-you/` and `/404.html`
(both `noindex`), plus the sample posts.

---

## Editing the site

### Facts, phone numbers, address — `src/_data/site.json`

Every page, the footer, the enquiry forms and the structured data read from this
one file. Change the helpline here and it changes everywhere. **Never type a
phone number, address or fact directly into a template.**

Start by replacing the values still in square brackets: `phone`, `whatsapp`,
`email`, `postalCode`, `officeHours`, `campusArea`, the `stats` block, the
`social` URLs, `formEndpoint` and `analyticsId`.

`phoneHref` and `whatsappHref` are the link targets and must be updated
alongside `phone` and `whatsapp` (`tel:+91…`, `https://wa.me/91…`).

Years of service ("18+ years") is calculated from `established` at build time, so
it never needs touching.

### Courses — `src/_data/programmes.json`

One entry per programme. Each entry generates its full page at
`/courses/<slug>/`, its row in the comparison tables on `/courses/` and
`/admissions/`, its card, its footer link, its dropdown option in every form, and
its `Course` + `FAQPage` structured data.

To add a programme, copy an existing entry and change the fields. To remove one,
delete its entry — nothing else needs editing.

Per-programme fields to fill in: `seats`, `fee`, the bracketed parts of
`eligibility` and `admissionRoute`, and the `semesters` subject lists (from the
syllabus PDF).

### Images — `src/_data/images.json`

Every image is a key with a `url`, `alt`, `width` and `height`. Templates only
refer to the key, so swapping a photo means changing one `url`.

The site currently uses free stock photos from Unsplash (and neutral
[picsum.photos](https://picsum.photos) placeholders for people, so that no real
person is implied). To use the college's own photos:

1. Save each as **WebP, under 200 KB**, named for search, for example
   `bca-computer-lab-city-college-management-lucknow.webp`.
2. Put them in `src/assets/img/`.
3. Change the `url` to `/assets/img/<filename>` and update `width`/`height`.
4. Keep the alt text descriptive, naming the college and the subject.

The `gallery` array drives `/gallery/` and the previews on the home and campus
pages; each item's `album` decides which tab it appears under. The `videos` array
takes YouTube IDs.

### Posts — `src/news/` and `src/blog/`

One Markdown file per post. Copy one of the samples and edit the front matter.

**News & Events** (`src/news/`) — three samples are included:

```yaml
---
title: "Admissions open for the 2027-28 session"
metaTitle: "…"            # 50–60 characters
metaDescription: "…"      # 140–160 characters
date: 2026-10-06
category: Admissions      # Notices | Admissions | Results & Merit Lists | Events
postType: article         # use `event` for events — adds Event schema
image: newsAdmission      # a key from images.json
permalink: "/news-events/admissions-open-2027-28/"
intro: "One or two sentences used on the listing card."
attachment: "/assets/docs/notice.pdf"   # optional
related: ["bba", "bca"]                 # programme slugs, shown as links
---
```

For an event post also set `eventDate` (and optionally `eventEndDate` and
`eventLocation`), which feed the `Event` structured data.

Notices and merit lists should be **written out as text** on the page with the
PDF attached, not published as a scanned PDF alone — search engines cannot read
a scan, and students on phones struggle with them.

**Blog** (`src/blog/`) — three samples are included. Each post should be
800–1,500 words and link to at least one programme page. `postType: article` is
set automatically for everything in this folder.

The category tabs, filters and listings update themselves; nothing else needs
editing when a post is added.

### Documents

PDFs go in `src/assets/docs/` and are copied to `/assets/docs/` at build time.
The site already links to the fee structure, each programme brochure, the
affiliation and NCTE recognition letters and the mandatory disclosure — see
`src/assets/docs/README.txt` for the exact filenames expected.

### Branding

Colours, spacing, radii, shadows and the type scale are CSS custom properties at
the top of `src/assets/css/style.css`. Changing `--brand` and `--accent` there
restyles the whole site. The logo is a placeholder in
`src/_includes/partials/header.njk` (and `src/assets/img/logo.svg`); replace both
with the college's own mark.

---

## Placeholders

Every value the college still has to supply is kept visible, written in
`[square brackets]` and highlighted in yellow on the page by the `.ph` class.
To find what is left to fill in:

```bash
npm run build
grep -ro 'class="ph"' _site | wc -l     # how many remain
grep -rho '\[[^]]*\]' src/_data src/*.njk src/news src/blog | sort -u
```

They are deliberately loud. Remove the brackets as real values arrive, and the
highlight disappears with them.

---

## SEO

Handled by the build; check these before go-live.

- **Per page:** unique `<title>`, meta description, canonical, Open Graph and
  Twitter tags, from each page's front matter.
- **Structured data:** `CollegeOrUniversity` (home, about, contact), `Course`
  (each programme page), `FAQPage` (home, admissions, every programme page),
  `BreadcrumbList` (inner pages), `Article` (blog and news posts), `Event`
  (event posts). Validate at
  [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
- **`/sitemap.xml`** is generated from the build and excludes `noindex` pages.
  **`/robots.txt`** allows everything except `/thank-you/` and points to it.
  Submit the sitemap in Google Search Console.
- **Analytics:** put the GA4 measurement ID in `site.json` as `analyticsId`. The
  tag only renders once it is a real ID. Call clicks, WhatsApp clicks and form
  submissions already fire events (`call_click`, `whatsapp_click`,
  `form_submit`).
- **Old URLs:** `src/.htaccess` 301-redirects `index.html`, `about.html`,
  `course.html`, `beyond-academics.html`, `faculty.html`, `contact.html`,
  `founder-message.html`, `director-message.html` and `online_registration.php`
  to their new pages.
- **Name, address, phone** must match word for word across the footer,
  `/contact/`, `site.json`, the JSON-LD and the Google Business Profile.

---

## Forms

The enquiry and application forms post to `formEndpoint` in `site.json`.

While that value is still a placeholder, `main.js` validates the form, then
sends the visitor to `/thank-you/` without posting anywhere — so the flow can be
demonstrated before an endpoint exists. Once `formEndpoint` is a real URL the
form posts to it normally, and `_next` carries the visitor to `/thank-you/`.

Validation is client-side only: required fields, a 10-digit Indian mobile
number, a valid email if given, and the consent checkbox. There is also a hidden
honeypot field (`_honey`) against bots.

Still to be arranged with the provider: **OTP verification** of the mobile
number, the SMS/WhatsApp confirmation, and pushing the lead into the admission
CRM tagged with programme and source.

---

## Accessibility and performance notes

- One `<h1>` per page, headings in order, landmarks, a skip link and visible
  focus rings.
- The site works without JavaScript: all content is in the HTML, the mobile menu
  stays open in the flow, FAQs are `<details>` elements, and filter buttons
  simply leave everything visible.
- `prefers-reduced-motion` switches off the scroll reveal and transitions.
- Images carry `width`/`height` (no layout shift) and `loading="lazy"`
  everywhere except each page's hero.
- No external CSS or JS frameworks, no web fonts — the only third-party requests
  are the placeholder images and the embedded Google Map.

---

## Deploying

Run `npm run build` and upload the **contents of `_site/`** to the web root.

- **Apache / cPanel shared hosting:** upload everything including the hidden
  `.htaccess`, which handles the old-URL redirects, HTTPS, the non-www
  canonical host and caching.
- **Netlify / Cloudflare Pages / Vercel:** build command `npm run build`,
  publish directory `_site`. These ignore `.htaccess`, so recreate the redirects
  in `_redirects` / `netlify.toml` / `vercel.json`.

Before go-live: set the real domain in `site.json` (`url`) if it changes, fill in
the placeholders, replace the images and logo, add the PDFs, set the GA4 ID and
the form endpoint, confirm the map pin and address, then submit the sitemap to
Google Search Console.

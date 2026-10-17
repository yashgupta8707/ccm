# City College of Management — Website Revamp Content Blueprint

Oct 14, 2026 · @Yash Gupta

## Key facts

This block is the single source of truth for the college's facts. The website reads it into the homepage "At a Glance" strip, the About page, the footer, course pages and the structured data. A fact changed here changes everywhere, so it should be kept as one data file or CMS entry, never retyped on each page. Items in square brackets are for the college office to fill in.

| Fact | Value |
| --- | --- |
| Official name | City College of Management |
| Short name | CCM |
| Parent group | City Group of Colleges, Lucknow |
| Established | 2008 |
| Years of service | 18+ years (calculated automatically from 2008) |
| Campus | Tiwariganj, Faizabad Road, Chinhat, Lucknow, Uttar Pradesh \[PIN code\] |
| Landmark | Near Crown Mall, Faizabad Road |
| Campus area | \[e.g. 4 acres\] |
| Programmes | 7 (4 undergraduate, 2 teacher education degrees, 1 diploma) |
| University affiliation | University of Lucknow (BBA, BCA, B.Com, B.Sc Agriculture) |
| Teacher education recognition | National Council for Teacher Education (NCTE): B.Ed, M.Ed, D.El.Ed |
| Affiliating body for B.Ed / M.Ed | \[University of Lucknow — confirm\] |
| Affiliating body for D.El.Ed | \[SCERT Uttar Pradesh — confirm\] |
| Students on campus | \[number\] |
| Faculty members | \[number\] |
| Alumni | \[number\]+ |
| Admission helpline | \[+91 XXXXX XXXXX\] |
| WhatsApp | \[+91 XXXXX XXXXX\] |
| Email | \[admissions@citycollegemanagement.com\] |
| Office hours | \[Monday to Saturday, 9:00 am to 5:00 pm\] |
| Social media | \[Facebook, Instagram, YouTube, LinkedIn URLs\] |
| Current admission session | 2027-28 |

**Programmes at a glance**

| Programme | Duration | Stream | Affiliation / recognition | Seats |
| --- | --- | --- | --- | --- |
| BBA (Bachelor of Business Administration) | 3 years | Management | University of Lucknow | \[seats\] |
| BCA (Bachelor of Computer Applications) | 3 years | Computer Applications | University of Lucknow | \[seats\] |
| B.Com (Bachelor of Commerce) | 3 years | Commerce | University of Lucknow | \[seats\] |
| B.Sc Agriculture | 4 years | Agriculture | University of Lucknow | \[seats\] |
| B.Ed (Bachelor of Education) | 2 years | Teacher Education | NCTE recognised | \[seats\] |
| M.Ed (Master of Education) | 2 years | Teacher Education | NCTE recognised | \[seats\] |
| D.El.Ed (Diploma in Elementary Education) | 2 years | Teacher Education | NCTE recognised | \[seats\] |

NCTE grants *recognition* to teacher-education programmes, while a university or SCERT grants *affiliation*. Using "Recognised by NCTE" on the site is the accurate wording; the affiliating body for each teacher-education programme should be confirmed and shown alongside it.

## Site structure

The navbar has seven plain links and one Apply Now button, with no dropdowns. Detail sits inside each page: the About page carries the Founder and Director messages, and the Courses page links to the seven programme pages. Gallery, News & Events and Blog are reached from the Campus Life page, the top bar and the footer.

**Top bar** (thin strip above the navbar)

| Left side | Right side |
| --- | --- |
| Phone (click to call) · Email (click to mail) | Admissions 2027-28 Open → `/admissions` · News & Events → `/news-events` · City Group of Colleges → cgclko.com |

**Navbar**

| Position | Label | URL |
| --- | --- | --- |
| Left | Logo (links home) | `/` |
| 1 | Home | `/` |
| 2 | About | `/about` |
| 3 | Courses | `/courses` |
| 4 | Admissions | `/admissions` |
| 5 | Campus Life | `/campus-life` |
| 6 | Placements | `/placements` |
| 7 | Contact | `/contact` |
| Right | **Apply Now** (button) | `/admissions#apply` |

On mobile the navbar collapses into a menu icon. A fixed bottom bar shows three buttons: Call, WhatsApp and Apply.

**Full sitemap**

| Page | URL | In navbar | Purpose |
| --- | --- | --- | --- |
| Home | `/` | Yes | First impression, key facts, courses, admissions call to action |
| About | `/about` | Yes | Story, vision and mission, Founder and Director messages, approvals, leadership |
| Courses | `/courses` | Yes | All seven programmes, grouped by stream |
| BBA | `/courses/bba` | via Courses | Programme detail |
| BCA | `/courses/bca` | via Courses | Programme detail |
| B.Com | `/courses/bcom` | via Courses | Programme detail |
| B.Sc Agriculture | `/courses/bsc-agriculture` | via Courses | Programme detail |
| B.Ed | `/courses/bed` | via Courses | Programme detail |
| M.Ed | `/courses/med` | via Courses | Programme detail |
| D.El.Ed | `/courses/deled` | via Courses | Programme detail |
| Admissions | `/admissions` | Yes | Process, eligibility, dates, documents, fees, scholarships, FAQs, application form |
| Campus Life | `/campus-life` | Yes | Facilities, hostel, transport, clubs, events preview, gallery preview |
| Gallery | `/gallery` | via Campus Life | Photo albums and videos |
| Placements | `/placements` | Yes | Placement cell, recruiters, results |
| News & Events | `/news-events` | via top bar, footer | Notices, events, merit lists, results |
| Blog | `/blog` | via footer | Admission and career articles for search traffic |
| Contact | `/contact` | Yes | Address, map, phone, email, enquiry form, admission team |
| Mandatory Disclosure | `/mandatory-disclosure` | via footer | NCTE and university disclosures |
| Student Welfare | `/student-welfare` | via footer | Anti-ragging, grievance, ICC, SC/ST cell |
| Privacy Policy | `/privacy-policy` | via footer | Data use |
| Terms of Use | `/terms` | via footer | Site terms |
| Fee Refund Policy | `/refund-policy` | via footer | Refund rules |
| Thank You | `/thank-you` | No (not indexed) | Shown after an enquiry; used to count conversions |

**Footer** (four columns plus a bottom strip)

| Column | Contents |
| --- | --- |
| 1. About | Logo, one-line description ("Established in 2008, City College of Management in Chinhat, Lucknow offers University of Lucknow-affiliated BBA, BCA, B.Com and B.Sc Agriculture, and NCTE-recognised B.Ed, M.Ed and D.El.Ed."), social icons |
| 2. Programmes | BBA · BCA · B.Com · B.Sc Agriculture · B.Ed · M.Ed · D.El.Ed |
| 3. Quick Links | About · Admissions · Campus Life · Gallery · Placements · News & Events · Blog · Mandatory Disclosure · Student Welfare |
| 4. Contact | Full address with PIN code, phone, WhatsApp, email, office hours, small map or "Get Directions" link |
| Bottom strip | © \[current year\] City College of Management, a unit of City Group of Colleges · Privacy Policy · Terms of Use · Fee Refund Policy |

## Sitewide SEO setup

Every page below comes with its own meta title, meta description, H1 and target keyword. These rules apply to all pages.

| Element | Rule |
| --- | --- |
| Meta title | 50–60 characters, main keyword first, ending "\| City College of Management" (or "\| CCM Lucknow" when space is short) |
| Meta description | 140–160 characters, keyword early, ending with an action ("Apply now", "Call us") |
| H1 | One per page, close to the meta title but written for people |
| URL | Lowercase, hyphenated, no `.html`, no spaces |
| Canonical | Every page points to itself on one domain (choose `https://citycollegemanagement.com` without www) |
| Open Graph | `og:title`, `og:description`, and a 1200 × 630 campus image per page, so links shared on WhatsApp show a preview |
| Images | WebP, under 200 KB, descriptive alt text naming the college and the subject ("BCA computer lab at City College of Management, Lucknow") |
| Internal links | Every course page links to Admissions and to its sibling courses; every blog post links to at least one course page |
| Sitemap and robots | `/sitemap.xml` generated automatically; `/robots.txt` allows all and points to it; submit in Google Search Console |
| Analytics | Google Analytics 4 with events for form submissions, call clicks and WhatsApp clicks |
| Old URLs | 301 redirects from `index.html`, `about.html`, `course.html`, `beyond-academics.html`, `faculty.html`, `contact.html`, `founder-message.html`, `director-message.html` and `online_registration.php` to their new pages |

**Structured data (JSON-LD)**

| Schema | Where | Key properties |
| --- | --- | --- |
| `CollegeOrUniversity` | Home, About, Contact | name, foundingDate 2008, address, geo, telephone, email, logo, sameAs (social links), parentOrganization City Group of Colleges |
| `Course` | Each programme page | name, description, provider, timeRequired, educationalCredentialAwarded |
| `FAQPage` | Admissions and every programme page | The FAQ questions and answers on that page |
| `BreadcrumbList` | All inner pages | Home › Section › Page |
| `Event` | Each event post | name, startDate, location |
| `Article` | Each blog post | headline, datePublished, author, image |

**Target location keywords** to use naturally across pages: Lucknow, Chinhat, Faizabad Road, Tiwariganj, near Crown Mall, Uttar Pradesh.

## Home page

| SEO field | Value |
| --- | --- |
| URL | `/` |
| Meta title | BBA, BCA & B.Ed College in Lucknow \| City College of Management |
| Meta description | City College of Management, Chinhat, Lucknow, since 2008. LU-affiliated BBA, BCA, B.Com, B.Sc Ag and NCTE-recognised B.Ed, M.Ed, D.El.Ed. Apply for 2027-28. |
| H1 | Management, Computer, Agriculture and Teacher Education College in Lucknow |
| Primary keyword | college in Lucknow for BBA BCA B.Ed |
| Secondary keywords | college in Chinhat Lucknow, Faizabad Road college, University of Lucknow affiliated college, NCTE recognised college Lucknow |

**Sections, top to bottom**

**1. Hero banner** (one strong campus photo or short muted video; no carousel)

> **Shape your career at City College of Management, Lucknow** University of Lucknow-affiliated degrees and NCTE-recognised teacher education, on Faizabad Road since 2008. Buttons: **Apply for 2027-28** · **Explore Courses**

**2. At a Glance strip** (pulled from Key Facts)

> Since 2008 · 7 Programmes · University of Lucknow Affiliated · NCTE Recognised · \[number\]+ Alumni · \[Campus area\] Campus

**3. Welcome** (H2: A college built for careers, not just degrees)

> For more than eighteen years, City College of Management has prepared students from Lucknow and across Uttar Pradesh for careers in business, technology, agriculture and teaching. Our undergraduate programmes are affiliated to the University of Lucknow, and our teacher-education programmes are recognised by the National Council for Teacher Education.
>
> Classes are small enough for every student to be known by name. Faculty combine academic depth with practical exposure through projects, internships, field work and school teaching practice. The result is graduates who are ready for the workplace, for higher studies and for competitive examinations.
>
> Link: **Read our story →** `/about`

**4. Our Programmes** (H2: Programmes offered) — three stream cards, each listing its courses with duration and a link to the course page

| Card | Courses shown | One-line card text |
| --- | --- | --- |
| Management and Commerce | BBA (3 yrs) · BCA (3 yrs) · B.Com (3 yrs) | University of Lucknow degrees for careers in business, IT and finance. |
| Agriculture | B.Sc Agriculture (4 yrs) | A professional science degree for farming, agri-business and government agriculture roles. |
| Teacher Education | B.Ed (2 yrs) · M.Ed (2 yrs) · D.El.Ed (2 yrs) | NCTE-recognised programmes for school teachers and teacher educators. |

**5. Why Choose CCM** (H2: Why students choose City College of Management) — six icon tiles

| Tile | Text |
| --- | --- |
| Recognised degrees | University of Lucknow affiliation and NCTE recognition |
| Experienced faculty | Qualified teachers who mentor every student |
| Practical learning | Computer lab, agriculture field work and school teaching practice |
| Career support | Placement cell, internships and interview preparation |
| Easy to reach | On Faizabad Road, Chinhat, near Crown Mall, with \[transport facility\] |
| Affordable fees | Transparent fees and scholarship support |

**6. Admissions banner** (H2: Admissions open for 2027-28)

> Applications are open for all seven programmes. Check eligibility, important dates and documents, or speak to our admission team today. Buttons: **Apply Now** · **Call Admission Team** · **WhatsApp Us**

**7. Campus Life preview** (H2: Life on campus) — 4–6 photos from the Gallery, link **View Gallery →**

**8. Placements preview** (H2: Where our students go) — recruiter logo strip and two placed-student cards, link **See Placements →**

**9. Testimonials** (H2: What our students say) — three quotes with name, programme and batch: \[student quotes\]

**10. News & Events** (H2: Latest from campus) — latest three posts, automatically pulled from `/news-events`

**11. Homepage FAQ** (H2: Frequently asked questions) — with `FAQPage` schema

- **Which courses does City College of Management offer?** BBA, BCA, B.Com and B.Sc Agriculture, affiliated to the University of Lucknow, and B.Ed, M.Ed and D.El.Ed, recognised by NCTE.
- **Where is the college located?** Tiwariganj, Faizabad Road, Chinhat, Lucknow, near Crown Mall.
- **When was the college established?** In 2008.
- **How do I apply?** Fill in the application form on the Admissions page or call the admission team on \[helpline\].

**12. Map and contact strip** — embedded map, address, phone, **Get Directions** button.

## About page

| SEO field | Value |
| --- | --- |
| URL | `/about` |
| Meta title | About City College of Management, Lucknow \| Since 2008 |
| Meta description | Established in 2008 in Chinhat, Lucknow, City College of Management offers LU-affiliated and NCTE-recognised programmes. Read our story, vision and leadership. |
| H1 | About City College of Management |
| Primary keyword | City College of Management Lucknow |

The page is long and scrolls through its sections. A small sticky sub-menu at the top jumps to each one: Our Story · Vision & Mission · Founder's Message · Director's Message · Approvals · Leadership. This replaces the old About dropdown.

**1. Our Story** (H2)

> City College of Management was established in 2008 on Faizabad Road, Chinhat, as part of the City Group of Colleges, Lucknow. It began with a simple aim: to give students in this growing part of the city access to recognised, career-focused higher education close to home.
>
> Over eighteen years the college has grown into a multi-disciplinary campus offering seven programmes. These are four undergraduate degrees affiliated to the University of Lucknow (BBA, BCA, B.Com and B.Sc Agriculture), and three teacher-education programmes recognised by the National Council for Teacher Education (B.Ed, M.Ed and D.El.Ed). Its \[number\]+ alumni now work in business, information technology, banking, agriculture and schools across Uttar Pradesh.

**2. Key facts box** (pulled from Key Facts): Established 2008 · Campus \[area\] · 7 programmes · \[number\] faculty · \[number\] students · University of Lucknow · NCTE

**3. Vision & Mission** (H2)

> **Our Vision** To be a trusted centre of higher education in Lucknow that prepares capable professionals, committed teachers and responsible citizens.
>
> **Our Mission**
>
> - Deliver University of Lucknow and NCTE programmes to a high standard of teaching and assessment.
> - Connect classroom learning with practice through labs, field work, internships and school teaching practice.
> - Develop leadership, communication and ethical values alongside subject knowledge.
> - Keep quality education affordable and accessible to students from every background.
> - Support every student's progress through mentoring, career guidance and placement assistance.

**4. Founder's Message** (H2) — photo, name and signature

> **Mr. M. M. Srivastava, Founder**
>
> When we founded City College of Management in 2008, our belief was simple. A good education should open doors, and it should be within reach of every capable student. That belief still guides every decision we take.
>
> A college is judged by the character of its teachers and the achievements of its students. We have worked to build a campus where both can grow: where teachers are supported to teach well, and where students are challenged, encouraged and prepared for what comes next. There will be obstacles along the way. Determination and steady effort overcome them, and that is the lesson we hope every student takes from their years here.
>
> I welcome you to City College of Management and wish you every success.

**5. Director's Message** (H2) — photo, name and signature

> **Dr. Mamta Srivastava, Director**
>
> We live in a time of rapid change and strong competition. Employers today look for graduates who can think independently, adapt quickly and work well with others. Our programmes are designed with this in mind.
>
> At City College of Management, students learn current theory alongside practical application, whether in our computer lab, on the agriculture field, in school classrooms during teaching practice, or through internships and projects. Our faculty mentor each student closely, and our placement cell helps them take the next step.
>
> We are committed to giving every student an outstanding learning experience from admission to graduation. I invite you to visit our campus and see it for yourself.

**6. Approvals & Affiliation** (H2) — one card per body, each with a "View document" link to the PDF

| Card | Text |
| --- | --- |
| University of Lucknow | BBA, BCA, B.Com and B.Sc Agriculture are affiliated to the University of Lucknow. \[Affiliation letter number and date\] |
| NCTE | B.Ed, M.Ed and D.El.Ed are recognised by the National Council for Teacher Education. \[Recognition order numbers and dates\] |
| Affiliating body for teacher education | \[University of Lucknow / SCERT Uttar Pradesh — confirm per programme\] |

**7. Leadership & Governing Body** (H2) — photo cards: name, designation, one line

> &#91;Chairman\] · \[Founder\] · \[Director\] · \[Principal\] · \[Governing body members\]

**8. Part of City Group of Colleges** (H2)

> City College of Management is a member of the City Group of Colleges, Lucknow, a network of institutions across Chinhat, Jankipuram, Ratankhand and Barabanki. Link: **Visit City Group of Colleges →** cgclko.com

**9. Call to action** — "Visit the campus or start your application": **Apply Now** · **Book a Campus Visit**

## Courses page and programme template

| SEO field | Value |
| --- | --- |
| URL | `/courses` |
| Meta title | Courses in Lucknow: BBA, BCA, B.Com, B.Sc Ag, B.Ed \| CCM |
| Meta description | Explore 7 programmes at City College of Management, Lucknow: BBA, BCA, B.Com, B.Sc Agriculture (LU) and B.Ed, M.Ed, D.El.Ed (NCTE). Duration, eligibility, fees. |
| H1 | Courses Offered at City College of Management |
| Primary keyword | courses in Lucknow after 12th and graduation |

**Intro**

> City College of Management offers seven full-time programmes across three streams. Undergraduate degrees in management, computer applications, commerce and agriculture are affiliated to the University of Lucknow. Teacher-education programmes are recognised by the National Council for Teacher Education. Choose a programme below to see its eligibility, syllabus, fees and career options.

**Filter buttons:** All · After 12th · After Graduation · Teacher Education

**Comparison table** (H2: Compare our programmes)

| Programme | Duration | Eligibility | Affiliation / recognition | Annual fee | Details |
| --- | --- | --- | --- | --- | --- |
| BBA | 3 years | 10+2 in any stream | University of Lucknow | \[fee\] | `/courses/bba` |
| BCA | 3 years | 10+2 in any stream | University of Lucknow | \[fee\] | `/courses/bca` |
| B.Com | 3 years | 10+2 in any stream | University of Lucknow | \[fee\] | `/courses/bcom` |
| B.Sc Agriculture | 4 years | 10+2 with Biology / Agriculture, 50% \[confirm\] | University of Lucknow | \[fee\] | `/courses/bsc-agriculture` |
| B.Ed | 2 years | Graduation or post-graduation as per NCTE norms | NCTE recognised | \[fee\] | `/courses/bed` |
| M.Ed | 2 years | B.Ed with minimum marks as per NCTE norms | NCTE recognised | \[fee\] | `/courses/med` |
| D.El.Ed | 2 years | Graduation as per state norms | NCTE recognised | \[fee\] | `/courses/deled` |

**Bottom call to action:** "Not sure which programme suits you? Talk to our admission counsellor." **Call** · **WhatsApp**

### Programme page template

All seven programme pages follow the same structure, so they look consistent and are easy to update. Each section's content for every programme follows in the next sections.

| # | Section | What goes in it |
| --- | --- | --- |
| 1 | Header | H1, breadcrumb (Home › Courses › Programme), one-line summary, Apply Now and Download Brochure buttons |
| 2 | Quick facts box | Duration, mode (full time), seats, eligibility, affiliation, annual fee |
| 3 | About the programme | 2–3 paragraphs of copy (provided per programme) |
| 4 | Why study it at CCM | 4–5 bullet points |
| 5 | Eligibility and admission process | Criteria and numbered steps |
| 6 | Programme structure | Semester-wise subject list as per the current university or NCTE syllabus \[from the syllabus PDF\] |
| 7 | Fee structure | Table: tuition, examination, other fees per year \[fees\] |
| 8 | Career opportunities | Job roles and higher-study options |
| 9 | Faculty | 3–4 faculty cards for that department \[faculty\] |
| 10 | FAQs | 5–6 questions with `FAQPage` schema |
| 11 | Enquiry box | Counsellor card plus a short form with the programme pre-selected |
| 12 | Related programmes | Links to sibling programmes |

## Programme pages: BBA, BCA, B.Com

These three pages are written to rank for the most searched undergraduate courses in Lucknow. Admission for all three is direct, on merit, as per University of Lucknow norms \[confirm\].

### BBA — Bachelor of Business Administration

| SEO field | Value |
| --- | --- |
| URL | `/courses/bba` |
| Meta title | BBA College in Lucknow – Admission 2027, Fees \| CCM |
| Meta description | Study a 3-year BBA affiliated to the University of Lucknow at City College of Management, Chinhat. Eligibility 10+2 any stream. Check fees and apply for 2027-28. |
| H1 | BBA (Bachelor of Business Administration) in Lucknow |
| Primary keyword | BBA college in Lucknow |
| Secondary keywords | BBA admission 2027 Lucknow, BBA fees Lucknow University, BBA after 12th |

**About the programme**

> The Bachelor of Business Administration at City College of Management is a three-year undergraduate degree affiliated to the University of Lucknow. It builds a foundation in management, covering principles of management, marketing, finance, human resources, accounting, business law, economics and entrepreneurship.
>
> Teaching combines classroom lectures with case studies, presentations, group projects and industry visits, so students learn how businesses actually run. The programme suits students from any 10+2 stream who want a career in business or plan to go on to an MBA.

**Why study BBA at CCM**

- University of Lucknow degree
- Case-based teaching, presentations and live projects
- Industry visits, guest lectures and internship support
- Personality development and interview preparation
- Placement cell support in the final year

**Eligibility:** 10+2 (Intermediate) in any stream from a recognised board \[minimum percentage, if any\].

**Careers:** Business development executive, marketing and sales executive, HR executive, operations executive, banking and financial services roles, entrepreneurship. Higher study: MBA, PGDM.

**FAQs**

- **Is the BBA at City College of Management affiliated to Lucknow University?** Yes, the BBA is affiliated to the University of Lucknow.
- **Can a science or arts student take BBA?** Yes, students from any 10+2 stream are eligible.
- **What is the BBA fee?** \[Annual fee\]. See the full fee structure on this page.
- **Is there an entrance exam for BBA?** \[Admission is on merit / as per university norms — confirm\].
- **What can I do after BBA?** Join a company in a management role, or study further for an MBA or PGDM.

### BCA — Bachelor of Computer Applications

| SEO field | Value |
| --- | --- |
| URL | `/courses/bca` |
| Meta title | BCA College in Lucknow – Admission 2027, Fees \| CCM |
| Meta description | 3-year BCA affiliated to the University of Lucknow at City College of Management, Chinhat. Programming, databases, web development and lab practice. Apply for 2027-28. |
| H1 | BCA (Bachelor of Computer Applications) in Lucknow |
| Primary keyword | BCA college in Lucknow |
| Secondary keywords | BCA admission 2027 Lucknow, BCA fees Lucknow, BCA after 12th commerce or arts |

**About the programme**

> The Bachelor of Computer Applications is a three-year undergraduate degree affiliated to the University of Lucknow, designed for students who want to build a career in information technology. The course covers programming, data structures, database management, operating systems, computer networks, web technologies and software engineering.
>
> Students spend regular hours in the college's computer lab, working on programming assignments and a final-year project. The programme is open to students from any 10+2 stream, and prepares them for IT jobs or for an MCA.

**Why study BCA at CCM**

- University of Lucknow degree
- Networked computer lab with \[number\] systems and current software
- Hands-on programming and a final-year project
- Coding workshops and certification guidance
- Placement support for IT and software roles

**Eligibility:** 10+2 (Intermediate) in any stream from a recognised board \[minimum percentage; check whether Mathematics is required\].

**Careers:** Software developer, web developer, database assistant, IT support engineer, system administrator, technical content and testing roles. Higher study: MCA, MBA (IT).

**FAQs**

- **Is BCA a good course after 12th?** Yes, it is a direct route into IT careers and to an MCA.
- **Can commerce or arts students take BCA?** Yes, the programme is open to all 10+2 streams \[confirm Maths requirement\].
- **Does the college have a computer lab?** Yes, a networked computer lab with current hardware and software.
- **What is the BCA fee?** \[Annual fee\].
- **Is the BCA affiliated to Lucknow University?** Yes.

### B.Com — Bachelor of Commerce

| SEO field | Value |
| --- | --- |
| URL | `/courses/bcom` |
| Meta title | B.Com College in Lucknow – Admission 2027 \| CCM |
| Meta description | Study B.Com (3 years) affiliated to the University of Lucknow at City College of Management, Chinhat, Lucknow. Accounting, taxation, finance. Apply for 2027-28. |
| H1 | B.Com (Bachelor of Commerce) in Lucknow |
| Primary keyword | B.Com college in Lucknow |
| Secondary keywords | B.Com admission Lucknow University, B.Com fees Lucknow, commerce college Chinhat |

**About the programme**

> The Bachelor of Commerce is a three-year undergraduate degree affiliated to the University of Lucknow. It covers financial accounting, corporate accounting, cost accounting, income tax, GST, business law, banking, economics and business statistics.
>
> The programme gives students a strong base for careers in accounting, taxation and banking, and for professional courses such as CA, CS and CMA. Classes include practical work on accounting software \[e.g. Tally\] alongside the university syllabus.

**Why study B.Com at CCM**

- University of Lucknow degree
- Practical accounting and taxation sessions
- Guidance for CA, CS, CMA and banking examinations
- Experienced commerce faculty
- Placement support for accounts and finance roles

**Eligibility:** 10+2 (Intermediate) in any stream from a recognised board \[minimum percentage\].

**Careers:** Accountant, tax assistant, audit assistant, banking associate, insurance and finance roles, government examinations. Higher study: M.Com, MBA, CA, CS, CMA.

**FAQs**

- **Can a science or arts student take B.Com?** Yes, students from any 10+2 stream can apply.
- **Is the B.Com affiliated to Lucknow University?** Yes.
- **Can I prepare for CA alongside B.Com?** Yes, many students do, and faculty guide them.
- **What is the B.Com fee?** \[Annual fee\].

## Programme page: B.Sc Agriculture

| SEO field | Value |
| --- | --- |
| URL | `/courses/bsc-agriculture` |
| Meta title | B.Sc Agriculture College in Lucknow – Admission 2027 \| CCM |
| Meta description | 4-year B.Sc Agriculture affiliated to the University of Lucknow at City College of Management. Field practicals, agronomy, soil science. Apply for 2027-28. |
| H1 | B.Sc Agriculture in Lucknow |
| Primary keyword | B.Sc Agriculture college in Lucknow |
| Secondary keywords | B.Sc Ag admission 2027 Lucknow, B.Sc Agriculture fees, agriculture course after 12th |

**About the programme**

> B.Sc Agriculture is a four-year professional degree affiliated to the University of Lucknow. It covers agronomy, soil science, horticulture, plant breeding and genetics, plant pathology, entomology, agricultural economics, extension education and farm machinery.
>
> Learning goes beyond the classroom. Students take part in practical sessions \[on the college's agricultural field / at partner farms — confirm\], in crop production exercises and in rural awareness work. The programme prepares students for agriculture-sector jobs, government examinations, agri-business, and higher study in agricultural sciences.

**Why study B.Sc Agriculture at CCM**

- University of Lucknow degree
- Field practicals and crop production exercises \[confirm field facility\]
- Laboratory work in soil science and plant sciences \[confirm labs\]
- Guidance for government agriculture examinations
- Strong demand from agri-business, seed, fertiliser and food-processing companies

**Eligibility:** 10+2 with Biology / Agriculture, minimum 50% marks \[confirm subject combination and percentage\].

**Careers:** Agriculture development officer, field officer in seed, fertiliser and agrochemical companies, rural banking roles, agricultural extension, farm management, agri-entrepreneurship. Higher study: M.Sc Agriculture, MBA (Agri-business).

**FAQs**

- **How long is B.Sc Agriculture?** Four years.
- **Is the course affiliated to Lucknow University?** Yes.
- **Can PCM students apply?** \[Confirm whether Mathematics students are eligible\].
- **Are field practicals included?** Yes, practical field work is part of every year of study.
- **What is the fee?** \[Annual fee\].

## Programme pages: B.Ed, M.Ed, D.El.Ed

All three teacher-education programmes are recognised by NCTE. In Uttar Pradesh, seats in these programmes are allotted through state-level processes, so each page explains that route clearly. This is the question applicants ask most often.

### B.Ed — Bachelor of Education

| SEO field | Value |
| --- | --- |
| URL | `/courses/bed` |
| Meta title | B.Ed College in Lucknow – NCTE Recognised \| CCM |
| Meta description | NCTE-recognised 2-year B.Ed at City College of Management, Chinhat, Lucknow. Eligibility, UP B.Ed JEE counselling, fees and teaching practice. Apply for 2027-28. |
| H1 | B.Ed (Bachelor of Education) College in Lucknow |
| Primary keyword | B.Ed college in Lucknow |
| Secondary keywords | NCTE approved B.Ed college Lucknow, UP B.Ed JEE college code, B.Ed admission 2027 |

**About the programme**

> The Bachelor of Education is a two-year professional programme recognised by the National Council for Teacher Education. It prepares graduates to teach at upper primary, secondary and senior secondary levels. The course covers childhood and growing up, learning and teaching, pedagogy of school subjects, assessment, inclusive education, and information and communication technology in education.
>
> A major part of the programme is school internship. Trainees observe and teach real classes in partner schools under the guidance of college faculty and school mentors.

**Why study B.Ed at CCM**

- NCTE recognised \[and affiliated to — confirm\]
- Structured school internship with partner schools
- Psychology, ICT and teaching-aid labs \[confirm\]
- Guidance for CTET, UPTET and other teacher eligibility tests
- Experienced teacher-education faculty

**Eligibility:** Bachelor's or master's degree with at least 50% marks (relaxation for reserved categories as per rules), as per NCTE and state norms \[confirm current criteria\].

**Admission route:** Through the Uttar Pradesh B.Ed Joint Entrance Examination and its online counselling. Candidates select City College of Management during counselling using the college code \[college code\].

**Careers:** Teacher in government and private schools (after the relevant eligibility test), tutor, academic coordinator, content developer. Higher study: M.Ed.

**FAQs**

- **Is the B.Ed at City College of Management NCTE recognised?** Yes.
- **How do I get admission to B.Ed at CCM?** Appear in the UP B.Ed JEE and choose the college during counselling using code \[college code\].
- **What is the B.Ed fee?** \[Fee as fixed by the state / university\].
- **Is a school internship included?** Yes, it is a compulsory part of the programme.

### M.Ed — Master of Education

| SEO field | Value |
| --- | --- |
| URL | `/courses/med` |
| Meta title | M.Ed College in Lucknow – NCTE Recognised \| CCM |
| Meta description | Pursue a 2-year M.Ed at City College of Management, Lucknow, recognised by NCTE. Eligibility, admission process, research and dissertation. Apply for 2027-28. |
| H1 | M.Ed (Master of Education) in Lucknow |
| Primary keyword | M.Ed college in Lucknow |
| Secondary keywords | M.Ed admission 2027 Lucknow, NCTE recognised M.Ed |

**About the programme**

> The Master of Education is a two-year postgraduate programme recognised by NCTE, for teachers who want to become teacher educators, researchers, curriculum developers or education administrators. It covers philosophy, psychology and sociology of education, research methodology, curriculum studies, teacher education and educational management.
>
> Students complete a research dissertation and an internship in a teacher-education institution.

**Eligibility:** B.Ed (or equivalent as specified by NCTE) with at least 50% marks; relaxation for reserved categories as per rules \[confirm\].

**Admission route:** \[Entrance examination / merit as notified by the affiliating university — confirm\].

**Careers:** Teacher educator in B.Ed and D.El.Ed colleges (with further eligibility such as NET where required), school principal or coordinator, curriculum developer, education researcher. Higher study: Ph.D. in Education.

**FAQs**

- **Who can apply for M.Ed?** Graduates holding a B.Ed with the required marks.
- **Is there a dissertation?** Yes, a research dissertation is part of the programme.
- **What is the fee?** \[Fee\].

### D.El.Ed — Diploma in Elementary Education (formerly BTC)

| SEO field | Value |
| --- | --- |
| URL | `/courses/deled` |
| Meta title | D.El.Ed (BTC) College in Lucknow – Admission 2027 \| CCM |
| Meta description | NCTE-recognised 2-year D.El.Ed (formerly BTC) at City College of Management, Lucknow. Eligibility, UP counselling process and fees. Apply for 2027-28. |
| H1 | D.El.Ed (BTC) College in Lucknow |
| Primary keyword | D.El.Ed college in Lucknow |
| Secondary keywords | BTC college Lucknow, D.El.Ed admission 2027 UP, NCTE approved D.El.Ed college |

**About the programme**

> The Diploma in Elementary Education, widely known by its earlier name BTC, is a two-year programme recognised by NCTE. It trains teachers for classes 1 to 8. Trainees study child development, pedagogy of language, mathematics and environmental studies, inclusive education and classroom management. They then teach in primary and upper primary schools during their internship.

**Eligibility:** Graduation with the minimum marks prescribed by the state (relaxation for reserved categories as per rules) \[confirm current UP criteria\].

**Admission route:** Through the Uttar Pradesh state online application and merit-based counselling for D.El.Ed. Candidates choose City College of Management during counselling \[college code\].

**Careers:** Primary and upper primary teacher in government and private schools (after the relevant eligibility test such as UPTET or CTET), tutor, early-education roles.

**FAQs**

- **Is D.El.Ed the same as BTC?** Yes, BTC was the earlier name of the D.El.Ed programme in Uttar Pradesh.
- **How do I get admission?** Apply through the state's online D.El.Ed process and choose the college during counselling.
- **Is the course NCTE recognised?** Yes.
- **What is the fee?** \[Fee as fixed by the state\].

## Admissions page

| SEO field | Value |
| --- | --- |
| URL | `/admissions` |
| Meta title | Admission 2027-28 Open – BBA, BCA, B.Ed in Lucknow \| CCM |
| Meta description | Admissions open for 2027-28 at City College of Management, Lucknow. Eligibility, important dates, documents, fees and scholarships. Apply online or call us. |
| H1 | Admissions 2027-28 at City College of Management |
| Primary keyword | college admission 2027 Lucknow |
| Secondary keywords | BBA admission Lucknow, BCA admission Lucknow, B.Ed admission Lucknow, documents required for college admission |

Admissions is one long page with a sticky sub-menu: How to Apply · Eligibility · Important Dates · Fees · Scholarships · Documents · Admission Team · FAQs · Apply. This keeps the navbar flat and puts everything an applicant needs on one URL.

**1. Intro**

> Admissions for the 2027-28 session are open for all seven programmes. Admission to BBA, BCA, B.Com and B.Sc Agriculture is made directly by the college as per University of Lucknow norms. Admission to B.Ed, M.Ed and D.El.Ed is made through the state counselling and entrance processes. The sections below explain each route step by step.

**2. How to Apply** (H2) — two side-by-side routes

| Direct admission: BBA, BCA, B.Com, B.Sc Agriculture | Counselling route: B.Ed, M.Ed, D.El.Ed |
| --- | --- |
| 1. Fill in the online enquiry or application form | 1. Apply for the state entrance or counselling (\[UP B.Ed JEE / D.El.Ed online application / M.Ed process\]) |
| 2. Our admission counsellor contacts you within one working day | 2. In counselling, choose City College of Management (college code \[code\]) |
| 3. Visit the campus for counselling and document verification | 3. Report to the college with your allotment letter |
| 4. Pay the admission fee and confirm your seat | 4. Complete document verification and fee payment |

**3. Eligibility** (H2) — the same table as the Courses page, linked to each programme

**4. Important Dates** (H2) — updated every session

| Event | Date |
| --- | --- |
| Applications open | \[date\] |
| Last date to apply | \[date\] |
| Merit list / counselling | \[date\] |
| Document verification | \[date\] |
| Classes begin | \[date\] |

**5. Fee Structure** (H2) — programme-wise table with annual tuition, examination fee and other charges \[fees\]. Link: **Download fee structure (PDF)**

**6. Scholarships & Concessions** (H2)

> Eligible students can apply for Uttar Pradesh government scholarships and fee reimbursement for SC, ST, OBC, minority and general-category students from economically weaker families, through the state scholarship portal. The college helps students complete their applications. \[Add any college merit or sibling concessions.\]

**7. Documents Required** (H2)

- Class 10 marksheet and certificate
- Class 12 marksheet and certificate
- Graduation marksheets and degree (for B.Ed, M.Ed, D.El.Ed)
- B.Ed marksheets and degree (for M.Ed)
- Transfer certificate and character certificate from the last institution
- Migration certificate (for students from other universities or boards)
- Caste, income and domicile certificates (where applicable)
- Aadhaar card
- Entrance or counselling allotment letter (for B.Ed, M.Ed, D.El.Ed)
- Recent passport-size photographs

**8. Meet the Admission Team** (H2) — counsellor cards (see the Contact page section for card layout)

**9. Admission FAQs** (H2, with `FAQPage` schema)

- **Is there an entrance exam for BBA, BCA or B.Com?** \[Admission is on merit as per University of Lucknow norms — confirm\].
- **How do I get admission to B.Ed at City College of Management?** Through the UP B.Ed JEE counselling, choosing the college code \[code\].
- **Is hostel facility available?** \[Yes / No; for boys / girls\].
- **Are scholarships available?** Yes, eligible students can apply for UP government scholarships with the college's help.
- **Can I visit the campus before applying?** Yes, campus visits are welcome from \[days and times\].

**10. Apply** (H2, anchor `#apply`) — application form

| Field | Type |
| --- | --- |
| Full name | Text, required |
| Mobile number | Number with OTP verification, required |
| Email | Email, optional |
| Programme | Dropdown: BBA, BCA, B.Com, B.Sc Agriculture, B.Ed, M.Ed, D.El.Ed |
| City | Text |
| Message | Text, optional |
| Consent | Checkbox: "I agree to be contacted by the college about admissions" |
| Button | Submit Application |

After submission: redirect to `/thank-you`, send an SMS or WhatsApp confirmation, and push the lead into the admission CRM tagged with programme and source.

## Campus Life page and Gallery

### Campus Life

| SEO field | Value |
| --- | --- |
| URL | `/campus-life` |
| Meta title | Campus Life & Facilities – City College of Management Lucknow |
| Meta description | Explore the campus of City College of Management, Chinhat, Lucknow: library, computer lab, classrooms, agriculture field, hostel, transport, sports and events. |
| H1 | Campus Life at City College of Management |
| Primary keyword | college campus facilities Lucknow |

**Intro**

> Our campus on Faizabad Road, Chinhat, gives students the space and facilities to learn, practise and grow. Its \[area\] grounds include academic blocks, laboratories, a library, an agriculture field and room for sports and events.

**Facilities** (H2) — one card each with a photo, two lines of text and a key number

| Facility | Card text |
| --- | --- |
| Library | A reading room and lending library with \[number\] books, \[number\] journals and digital resources for every programme. |
| Computer Lab | \[number\] networked computers with current software, used for BCA practicals and computer training across programmes. |
| Classrooms | Spacious, well-lit classrooms with \[smart boards / projectors\]. |
| Agriculture Field | \[area\] of field space for B.Sc Agriculture practicals and crop production. \[confirm\] |
| Teacher Education Labs | Psychology lab, ICT lab and teaching-aids room for B.Ed, M.Ed and D.El.Ed trainees. \[confirm\] |
| Seminar Hall | Venue for guest lectures, workshops and cultural programmes, seating \[number\]. |
| Hostel | Separate hostels for \[boys / girls\] with \[facilities\]. \[confirm availability\] |
| Transport | College buses on \[routes\] across Lucknow. \[confirm\] |
| Sports | Grounds and equipment for \[cricket, volleyball, badminton, indoor games\]. |
| Cafeteria | Hygienic canteen serving meals and snacks. |
| Wi-Fi and safety | Wi-Fi campus, CCTV surveillance and medical first aid. \[confirm\] |

**Clubs and Activities** (H2)

> Students run clubs for culture, sports, literature, entrepreneurship, technology and community service. The college celebrates annual functions, sports meets, national days, Teachers' Day and festivals, and organises NSS or social outreach activities \[confirm\].

**Events preview** — latest three event posts from `/news-events`

**Gallery preview** — eight photos, link **View full gallery →** `/gallery`

### Gallery

| SEO field | Value |
| --- | --- |
| URL | `/gallery` |
| Meta title | Photo Gallery – City College of Management, Lucknow |
| Meta description | See photos and videos of City College of Management, Lucknow: campus, classrooms, labs, agriculture field, events, convocation and student activities. |
| H1 | Photo & Video Gallery |

**Layout:** album tabs at the top, a photo grid below, and a lightbox that opens each photo full screen.

| Album | Photos to collect |
| --- | --- |
| Campus | Entrance, building exterior, grounds, aerial view |
| Classrooms & Labs | Classrooms, computer lab, library, teacher-education labs |
| Agriculture | Field work, crops, practical sessions |
| Teaching Practice | B.Ed and D.El.Ed trainees teaching in schools |
| Events | Annual function, cultural fest, national days, seminars |
| Sports | Sports meet, matches, prize distribution |
| Convocation & Achievements | Degree distribution, toppers, awards |
| Videos | Campus tour, event highlights, student testimonials (embedded from YouTube) |

Every image file is named and described for search: file name `bca-computer-lab-city-college-management-lucknow.webp`, alt text "BCA students in the computer lab at City College of Management, Lucknow".

## Placements page

| SEO field | Value |
| --- | --- |
| URL | `/placements` |
| Meta title | Placements & Career Support – City College of Management |
| Meta description | Training and placement cell at City College of Management, Lucknow: recruiters, internships, career guidance and placed students for BBA, BCA, B.Com and B.Ed. |
| H1 | Training & Placement Cell |
| Primary keyword | college with placement in Lucknow |

**Intro**

> The Training & Placement Cell prepares students for their first job from the day they join. Students receive training in communication, aptitude, interviews and workplace skills, and the cell connects them with employers for internships and campus recruitment.

**What the cell does** (H2)

- Soft-skills, aptitude and group-discussion training
- Resume building and mock interviews
- Internships and live projects with local businesses and schools
- Campus recruitment drives and pool drives with City Group of Colleges
- Career counselling for higher studies and government examinations

**Placement highlights** (H2) — key numbers for the latest batch: \[students placed\] · \[recruiting companies\] · \[highest package\] · \[average package\]. Show these only when they can be backed by records.

**Our recruiters** (H2) — logo strip \[company and school names\]

**Placed students** (H2) — cards with photo, name, programme, batch and company \[student details, with consent\]

**Placement cell contact** — \[coordinator name, phone, email\]

## News & Events and Blog

Both are post listings, managed from the CMS so staff can publish without a developer. Each post gets its own URL, meta title and description.

### News & Events

| SEO field | Value |
| --- | --- |
| URL | `/news-events` (posts at `/news-events/[post-slug]`) |
| Meta title | News, Notices & Events – City College of Management |
| Meta description | Latest notices, admission updates, merit lists, results and campus events from City College of Management, Chinhat, Lucknow. |
| H1 | News, Notices & Events |

**Filter tabs:** All · Notices · Admissions · Results & Merit Lists · Events

**Each post contains:** title, date, category, featured image, body text, optional PDF attachment, and `Event` schema for events. Notices and merit lists are written as text on the page, with the PDF attached for download. Text keeps them readable by search engines; a scanned-only PDF does not.

### Blog

| SEO field | Value |
| --- | --- |
| URL | `/blog` (posts at `/blog/[post-slug]`) |
| Meta title | Career & Admission Guides – CCM Lucknow Blog |
| Meta description | Guides on courses after 12th, BBA vs BCA, B.Ed and D.El.Ed admission in UP, scholarships and careers, from City College of Management, Lucknow. |
| H1 | Career & Admission Guides |

**Each post contains:** 800–1,500 words, author name, publish date, featured image, table of contents, internal links to at least one programme page, an Apply Now box, and `Article` schema.

**First twelve posts** (one or two a month, heaviest from February to July)

| # | Title | Links to |
| --- | --- | --- |
| 1 | BBA vs BCA vs B.Com: Which Course to Choose After 12th? | BBA, BCA, B.Com |
| 2 | Courses After 12th Commerce in Lucknow | B.Com, BBA, BCA |
| 3 | Is BCA a Good Career Choice in 2027? | BCA |
| 4 | B.Sc Agriculture: Scope, Jobs and Salary in Uttar Pradesh | B.Sc Agriculture |
| 5 | UP B.Ed JEE 2027: Exam, Counselling and Choosing a College | B.Ed |
| 6 | D.El.Ed (BTC) Admission in UP: Eligibility and Process | D.El.Ed |
| 7 | B.Ed vs D.El.Ed: Which Teaching Course Is Right for You? | B.Ed, D.El.Ed |
| 8 | CTET and UPTET: A Guide for B.Ed and D.El.Ed Students | B.Ed, D.El.Ed |
| 9 | Career Options After BBA | BBA |
| 10 | Documents Required for College Admission in Lucknow | Admissions |
| 11 | UP Scholarship for College Students: How to Apply | Admissions |
| 12 | What Is M.Ed and Who Should Study It? | M.Ed |

## Contact page

| SEO field | Value |
| --- | --- |
| URL | `/contact` |
| Meta title | Contact City College of Management – Chinhat, Lucknow |
| Meta description | Visit City College of Management on Faizabad Road, Tiwariganj, Chinhat, near Crown Mall, Lucknow. Call \[helpline\], WhatsApp or email the admission team. |
| H1 | Contact City College of Management |
| Primary keyword | City College of Management Lucknow address |

**1. Contact details** (H2: Get in touch) — three cards

| Card | Content |
| --- | --- |
| Visit us | City College of Management, Tiwariganj, Faizabad Road, Chinhat, Lucknow, Uttar Pradesh \[PIN\]. Near Crown Mall. **Get Directions** button |
| Call or WhatsApp | Admission helpline \[number\] · WhatsApp \[number\] · Office \[number\] |
| Email | \[admissions@...\] · \[info@...\] |

Office hours: \[Monday to Saturday, 9:00 am to 5:00 pm\]

**2. Admission Team** (H2: Talk to our admission counsellors)

| Counsellor | Handles | Card shows |
| --- | --- | --- |
| \[Name\] | BBA, BCA, B.Com | Photo, languages, Call and WhatsApp buttons |
| \[Name\] | B.Sc Agriculture | Photo, languages, Call and WhatsApp buttons |
| \[Name\] | B.Ed, M.Ed, D.El.Ed | Photo, languages, Call and WhatsApp buttons |

**3. Enquiry form** (H2: Send us a message) — Name, Mobile (OTP), Email, Programme, Message, consent checkbox, **Send Message**

**4. Map** — full-width Google Map. Its pin uses exactly the name "City College of Management", matching the Google Business Profile.

**5. How to reach us** (H3)

> The campus is on Faizabad Road in Chinhat, near Crown Mall, \[distance\] from \[Polytechnic Chauraha / Matiyari Chauraha — confirm landmark\]. \[City buses / college transport routes\].

The college name, address and phone shown here must match the footer, the Key Facts block, the `CollegeOrUniversity` schema and the Google Business Profile word for word.

## Compliance and policy pages

These pages sit in the footer, not the navbar. They are what parents and regulators check to confirm the college is genuine. Each one is a plain text page with the official documents attached as PDFs.

| Page | URL | Meta title | Meta description | Content |
| --- | --- | --- | --- | --- |
| Mandatory Disclosure | `/mandatory-disclosure` | Mandatory Disclosure – City College of Management | NCTE and University of Lucknow mandatory disclosure for City College of Management, Lucknow: approvals, intake, faculty, fees and infrastructure. | Society or trust details, approvals and affiliation orders, intake per programme, faculty list with qualifications, fee structure, land and building details, infrastructure, governing body |
| Student Welfare | `/student-welfare` | Student Welfare & Grievance Cells – CCM Lucknow | Anti-ragging committee, grievance redressal, internal complaints committee and SC/ST cell at City College of Management, Lucknow, with contacts. | Anti-ragging committee and national helpline, Grievance Redressal Committee, Internal Complaints Committee, SC/ST and equal opportunity cell. Each lists its members, contact details and an online complaint form |
| Privacy Policy | `/privacy-policy` | Privacy Policy – City College of Management | How City College of Management collects, uses and protects personal information submitted through its website and admission forms. | What data is collected through forms, how it is used for admissions, how it is stored, who it is shared with (none outside the group), and how to request deletion |
| Terms of Use | `/terms` | Terms of Use – City College of Management | Terms governing use of the City College of Management website. | Website use, content ownership, links to external sites, limitation of liability |
| Fee Refund Policy | `/refund-policy` | Fee Refund Policy – City College of Management | Fee refund rules for students who withdraw admission at City College of Management, as per university and regulatory guidelines. | Refund rules and timelines as per university and regulatory guidelines \[college policy\] |
| Thank You | `/thank-you` | (not indexed: `noindex`) | — | Confirmation message, the next steps, the admission helpline and links to the programme pages |

With these, the new site will have 22 indexable pages (excluding blog and news posts), each with its own title, description and heading.

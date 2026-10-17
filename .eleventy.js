const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites root-relative href/src in the built HTML with pathPrefix, so the
  // same templates work at a domain root and under a sub-path such as the
  // GitHub Pages project URL (/ccm/). Locally the prefix is just "/".
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Pass through static assets and server config files untouched.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  // Markdown tables get the same horizontal-scroll wrapper the hand-written
  // tables use, so a wide table never widens the page on a phone.
  eleventyConfig.amendLibrary("md", (md) => {
    const passthrough = (tokens, idx, options, env, self) =>
      self.renderToken(tokens, idx, options);
    const open = md.renderer.rules.table_open || passthrough;
    const close = md.renderer.rules.table_close || passthrough;
    md.renderer.rules.table_open = (...args) =>
      '<div class="tablewrap">' + open(...args);
    md.renderer.rules.table_close = (...args) => close(...args) + "</div>";
  });

  // --- Collections ---------------------------------------------------------
  eleventyConfig.addCollection("news", (api) =>
    api.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("events", (api) =>
    api
      .getFilteredByGlob("src/news/*.md")
      .filter((p) => p.data.category === "Events")
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("blog", (api) =>
    api.getFilteredByGlob("src/blog/*.md").sort((a, b) => b.date - a.date)
  );

  // --- Filters -------------------------------------------------------------
  const MONTHS = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

  // "14 October 2026" — the long form used in post bylines and news cards.
  eleventyConfig.addFilter("dateLong", (value) => {
    const d = new Date(value);
    return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });

  // "2026-10-14" — for <time datetime> and schema date properties.
  eleventyConfig.addFilter("dateISO", (value) =>
    new Date(value).toISOString().slice(0, 10)
  );

  // Full ISO timestamp, used by sitemap.xml and Event schema.
  eleventyConfig.addFilter("dateFull", (value) =>
    new Date(value).toISOString()
  );

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  // Absolute URL on the canonical domain, for canonical/OG tags and JSON-LD.
  eleventyConfig.addFilter("absolute", function (url) {
    const base = (this.ctx || {}).site ? this.ctx.site.url : "";
    return `${base}${url}`;
  });

  // Marks up [square-bracket placeholders] from the blueprint so the college
  // office can spot every value that still needs filling in.
  eleventyConfig.addFilter("ph", (text) =>
    String(text == null ? "" : text).replace(
      /\[([^\[\]]+)\]/g,
      '<span class="ph">[$1]</span>'
    )
  );

  // Strips tags and collapses whitespace so body copy can feed a meta
  // description or a JSON-LD string safely.
  eleventyConfig.addFilter("plain", (text) =>
    String(text == null ? "" : text)
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim()
  );

  eleventyConfig.addFilter("jsonify", (value) => JSON.stringify(value));

  // Slug for anchor ids on headings and FAQ items.
  eleventyConfig.addFilter("slug", (text) =>
    String(text == null ? "" : text)
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );

  eleventyConfig.addFilter("excerpt", (text, n) => {
    const s = String(text == null ? "" : text)
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return s.length > n ? `${s.slice(0, n).replace(/\s\S*$/, "")}…` : s;
  });

  return {
    // Set ELEVENTY_PATH_PREFIX=/ccm/ for the GitHub Pages build; leave unset
    // when the site is served from the root of its own domain.
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};

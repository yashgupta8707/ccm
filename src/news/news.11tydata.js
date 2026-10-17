// Shared front matter for every post in src/news/.
module.exports = {
  layout: "layouts/post.njk",
  backUrl: "/news-events/",
  backLabel: "Back to news and events",
  author: "City College of Management",
  eleventyComputed: {
    breadcrumb: (data) => [
      { label: "News & Events", url: "/news-events/" },
      { label: data.title }
    ]
  }
};

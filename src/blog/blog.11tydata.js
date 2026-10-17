// Shared front matter for every post in src/blog/.
module.exports = {
  layout: "layouts/post.njk",
  postType: "article",
  backUrl: "/blog/",
  backLabel: "Back to all articles",
  author: "City College of Management",
  eleventyComputed: {
    breadcrumb: (data) => [
      { label: "Blog", url: "/blog/" },
      { label: data.title }
    ]
  }
};

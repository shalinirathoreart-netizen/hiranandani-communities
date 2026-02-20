module.exports = {
  layout: "blog-layout.njk",
  permalink: function(data) {
    return "/blog/" + data.page.fileSlug + "/index.html";
  }
};

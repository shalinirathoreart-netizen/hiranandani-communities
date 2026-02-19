module.exports = {
  layout: "base.njk",
  permalink: function(data) {
    return "/blog/" + data.page.fileSlug + "/index.html";
  }
};

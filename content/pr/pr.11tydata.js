module.exports = {
  layout: "base.njk",
  permalink: function(data) {
    return "/pr/" + data.page.fileSlug + "/index.html";
  }
};

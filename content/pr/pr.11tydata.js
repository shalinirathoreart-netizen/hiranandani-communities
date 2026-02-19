module.exports = {
  layout: "pr-layout.njk",
  permalink: function(data) {
    return "/pr/" + data.page.fileSlug + "/index.html";
  }
};

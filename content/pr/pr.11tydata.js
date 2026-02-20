module.exports = {
  layout: "pr-layout.njk",
  permalink: function(data) {
    return "/pr/" + (data.custom_slug || data.page.fileSlug) + "/index.html";
  }
};

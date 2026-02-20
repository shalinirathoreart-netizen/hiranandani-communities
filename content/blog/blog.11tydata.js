module.exports = {
  layout: "blog-layout.njk",
  permalink: function(data) {
    return "/blog/" + data.custom_slug + "/index.html";
  }
};

module.exports = {
  layout: "page-layout.njk",
  permalink: function(data) {
    return "/" + data.custom_slug + "/index.html";
  }
};

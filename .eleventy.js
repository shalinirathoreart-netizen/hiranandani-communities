module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md");
  });

  eleventyConfig.addCollection("pr", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/pr/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

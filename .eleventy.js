module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("content");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

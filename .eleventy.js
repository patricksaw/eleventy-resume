module.exports = function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
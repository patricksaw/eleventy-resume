const { exec } = require("child_process");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  // Watch for changes in SCSS files and run the build:css command
  eleventyConfig.addWatchTarget("src/assets/styles.scss");

  eleventyConfig.on("beforeWatch", (changedFiles) => {
    if (changedFiles.some((file) => file.endsWith(".scss"))) {
      exec("npm run build:css", (err, stdout, stderr) => {
        if (err) console.error(`Error: ${stderr}`);
        else console.log(stdout);
      });
    }
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
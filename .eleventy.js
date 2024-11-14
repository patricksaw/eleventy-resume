const { exec } = require("child_process");

// If you want to filter out old experience:
const earliestYear = 2011;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  // Watch for changes in SCSS files and run the build:css command
  eleventyConfig.addWatchTarget("src/assets/styles.scss");
  eleventyConfig.addGlobalData("earliestYear", earliestYear);

  eleventyConfig.addFilter("isOldExperience", (dateString) => {
    const year = parseInt(dateString.split("-")[0], 10);
    return year < earliestYear;
  });

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
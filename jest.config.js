/**
 * @type { import('jest').Config }
 */
const config = {
      verbose: true,
      reporters: [
            ["jest-junit", {
                  outputDirectory: "reports",
                  outputName: "report.xml"
            }]
      ]
};

module.exports = config;
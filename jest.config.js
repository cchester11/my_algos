/**
 * @type { import('jest').Config }
 */
const config = {
      verbose: true,
      reporters: [
            ["jest-junit", {
                  outputDirectory: "reports",
                  outputName: "junit_report.xml"
            }]
      ],
      testTimeout: 15000
};

module.exports = config;
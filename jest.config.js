/**
 * @type { import('jest').Config }
 */
const config = {
      verbose: true,
      reporters: [
            'default',
            ['<rootDir>/CustomReporter.js']
      ]
}

module.exports = config;
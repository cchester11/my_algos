const path = require('path');
const fs = require('fs');

/**
 * Determines whether or not a path is valid.
 * @param {(string)} xPath 
 * @returns {boolean}
 */
function checkPath (xPath) {
      if(path.isAbsolute(xPath)) {
            if(fs.existsSync(xPath)) {
                  return true
            }
      }

      return false
}

module.exports = checkPath;
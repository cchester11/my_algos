const path = require('path');
const fs = require('fs');

/**
 * Determines whether or not a path is valid.
 * @param {(string)} xPath 
 * @returns {string}
 */
function checkPath (xPath) {
      if(typeof xPath !== 'string') {
            throw new Error("path is not in string from")
      }

      if(path.isAbsolute(xPath)) {
            if(fs.existsSync(xPath)) {
                  return "exist sync"
            } else {
                  return "no exist sync"
            }
      }

      return "Incohesive file path."
}

module.exports = checkPath;
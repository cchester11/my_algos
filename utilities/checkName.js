/**
 * Checks the validity of string against specified constraints
 * @param {(string)} string 
 * @returns {string}
 */
function checkName (string) {
      string = string.replace(/[0-9]/g, '')
      string = string.replace(/\s/g, '')

      string = string.charAt(0).toLowerCase() + string.slice(1)
      
      return string
}

module.exports = checkName;
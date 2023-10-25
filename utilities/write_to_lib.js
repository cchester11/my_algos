// use fs to write a new file in lib
// filename will be the name parameter
// contents of file will be code parameter

const fs = require('fs');
const path = require('path');

/**
 * Accepts name you wish to name the new file and the parsed code you wish for the file to contain.
 * Then writes a new file to the lib folder
 * @param {(string)} name 
 * @param {*} code 
 * @returns {string}
 */
function write_to_lib (name, code) {
      const filePath = path.join(__dirname, `../lib/${name}.js`)

      fs.writeFile(filePath, code, (err) => {
            if (err) {
                  console.error(err)
            }

            console.log(`${name}.js written to lib folder`)
      })

      return 'success'
};

module.exports = write_to_lib;
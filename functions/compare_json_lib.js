const fs = require('fs');
const path = require('path');
const data = require('../json/algoData.json');

const libPath = path.join(__dirname, '../lib');

// extract names of all lib folder files
let fileNames = fs.readdirSync(libPath).map(fileName => path.basename(fileName, '.js'));
// extract the name property from all algoData.json objects
let jsonNames = Object.entries(data.algorithm_storage).map(([key, algorithm]) => {
      const name = algorithm.name;

      return name
})

const sortedJsonNames = jsonNames.sort();

// must match exactly
// must be same number of lib folder names and object name property names
function compareNamesArrays (libNames, jsonNames) {
      console.log({
            libLength: libNames.length,
            jsonLength: sortedJsonNames.length
      })

      if(libNames.length !== jsonNames.length) {
            for(let i = 0; i < libNames.length; i ++) {
                  if(libNames[i] !== jsonNames[i]) {
                        return {
                              message: "lengths do not match",
                              jsonNames: jsonNames[i]
                        }
                  }
            }
            return {
                  value: null,
                  message: "cannot find the mismatch"
            };
      }
}

// return true if all match and lengths are equal
// return this mismatches or extra names if lengths are not equal

console.log(compareNamesArrays(fileNames, sortedJsonNames))
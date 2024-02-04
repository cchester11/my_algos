// dependents
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

// function for comparing the arrays
function compareArrays(json, lib) {
      // sort arrays
      json = json.sort()
      lib = lib.sort()

      // if lengths do not match
      if (json.length !== lib.length) {
            // loop through to identify mismatch
            for (let i = 0; i < json.length; i++) {
                  console.log({
                        json: json[i],
                        lib: lib[i]
                  })
                  if (json[i] !== lib[i]) {
                        // return mismatch from json
                        return {
                              message: 'lengths do not match',
                              json: json[i],
                        };
                  }
            }

            // return  'cannot find  mismatch' if error
            return {
                  value: 'error',
                  message: 'cannot find the mismatch',
            };
      }

      // if lengths match
      for (let i = 0; i < json.length; i++) {
            if (json[i] !== lib[i]) {
                  return {
                        message: 'identified',
                        mismatch: json[i],
                  };
            }
      }

      return {
            message: 'no errors',
      };
}

console.log(compareArrays(jsonNames, fileNames))
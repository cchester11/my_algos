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

function compareArrays(json, lib) {
      // Sort arrays
      json = json.sort();
      lib = lib.sort();

      // If lengths do not match
      if (json.length !== lib.length) {
            for (let i = 0; i < json.length; i++) {
                  if (json[i] !== lib[i]) {
                        // Return mismatch from json
                        return {
                              message: 'lengths do not match',
                              culprit: json[i]
                        };
                  }
            }

            // Return 'cannot find mismatch' if error
            return {
                  value: 'error',
                  message: 'cannot find the mismatch',
            };
      }

      // If lengths match
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
// Output: {message: "lengths do not match", culprit: 'reverseString'}
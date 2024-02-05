// dependents
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const data = require('../json/algoData.json');
const libPath = path.join(__dirname, '../lib');

// extract names of all lib folder files
let fileNames = fs.readdirSync(libPath).map(fileName => path.basename(fileName, '.js'));
// extract the name property from all algoData.json objects
let jsonNames = Object.entries(data.algorithm_storage).map(([key, algorithm]) => {
      const name = algorithm.name;

      return name
})

const deletionQuery = async (culprit) => {
      await inquirer.prompt([
            {
                  type: "list",
                  name: "deletionJson",
                  message: `The name ${culprit} was found in the json. Would you like to delete this json object?`,
                  choices: [
                        "Yes",
                        "No"
                  ]
            }
      ])
      .then(answers  => {
            console.log(answers)
      })
      .catch(err => {
            throw new Error(err)
      })
}

async function compareArrays(json, lib) {
      // Sort arrays
      json = json.sort();
      lib = lib.sort();

      // If lengths do not match
      if (json.length !== lib.length) {
            for (let i = 0; i < json.length; i++) {
                  if (json[i] !== lib[i]) {
                        // Return mismatch from json
                        deletionQuery(json[i])

                        return 
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
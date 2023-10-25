const path = require('path');
const fs = require('fs');
const checkName = require('../utilities/checkName');

/**
 * Use command line to store a json object in the algoData.json file.
 * @param {(string)} name 
 * @param {(Date)} date 
 * @param {(string)} difficulty 
 * @param {(string)} code 
 * @returns {string}
 */
function storeAlgorithm(name, date, difficulty, code) {
      // resolve the path between this utility and the pwd
      const filePath = path.join(__dirname, '../json/algoData.json')
      console.log('Path to algorithm storage json file: ' + filePath)

      // check for errors in path
      if (path.isAbsolute(filePath)) {
            // read the storage file
            let storage;
            if (fs.existsSync(filePath)) {
                  const contents = fs.readFileSync(filePath, 'utf8')
                  storage = JSON.parse(contents)
            } else {
                  storage = {
                        algorithm_storage: []
                  }
                  console.log('no sync exist')
            }

            // variable representing the new json entry
            let data = storage.algorithm_storage;

            // prevent duplicate entry
            let check = data.find(item => item.name === name)
            if(check) {
                  return 'Found a matching name property in the database. Please provide a unique name for your algorithm'
            } else {
                  let check = []
                  let array = code.split('')

                  for(let i = 0; i < array.length; i ++) {
                        let curr = array[i]
                        check.push(curr)
                  }

                  if(check.includes('"')) {
                        throw new Error(`Please use ' characters in the place of " characters`)
                  }
            }

            name = checkName(name)

            if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
                  console.log("Error. Please use mm/dd/yyyy format for the date parameter")
                  return
            }

            // if no duplicate and no ""
            data.push({ name, date, difficulty, code })

            // stringify for shipment to json file
            const dataToJSON = JSON.stringify(storage, null, 2)

            // fs method for writing to json file
            fs.writeFile(filePath, dataToJSON, () => {
                  console.log('Algorithm(s) saved to storage file') 
            })

            return 'Algorithm(s) saved to json storage'
      } else {
            return 'Incohesive file path'
      }
}

module.exports = storeAlgorithm;
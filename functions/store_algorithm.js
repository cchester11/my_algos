const path = require('path');
const fs = require('fs');
const { 
      checkName,
      checkPath,
      checkDuplicate 
} = require('../utilities/index');

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

      let storage;

      console.log(checkPath(filePath))

      if ((checkPath(filePath)) === "no exist sync") {
            storage = {
                  algorithm_storage: []
            }
      } else if((checkPath(filePath)) === "exist sync"){
            const contents = fs.readFileSync(filePath, 'utf8')
            storage = JSON.parse(contents)
      } else {
            checkPath(filePath)
      }

      // variable representing the new json entry
      let data = storage.algorithm_storage;

      // prevent duplicate entry and "" characters
      checkDuplicate(name, code, data)

      // alter the name property to abide by naming standards
      name = checkName(name)

      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
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
}

module.exports = storeAlgorithm;
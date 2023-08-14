// dependencies
const fs = require('fs')
const path = require('path')
const checkName = require('../utilities/checkName')

// store function
// accepts algo name, date, and code
function storeAlgorithm(name, date, difficulty, code) {
      // resolve the path between this utility and the pwd
      const filePath = path.join(__dirname, '../json/algoData.json')
      console.log('Patht to algorithm storage json file: '  + filePath)

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
                        return `please replace any " characters with '`
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
      } else {
            return 'Incohesive file path'
      }
}

// command line args
// to be accepted as function params
const algoName = process.argv[2]
const algoDate = process.argv[3]
const algoDiff = process.argv[4]
const algoCode = process.argv[5]

// error checking
if (algoName && algoDate && algoDiff && algoCode) {
      storeAlgorithm(algoName, algoDate, algoDiff, algoCode)
} else {
      console.log(__dirname)
      console.log('Please provide the name under which you like to the algorithm to be stored, the date, and the code itself--in that order.')
}
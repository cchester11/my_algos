// dependencies
const fs = require('fs')
const path = require('path')

// store function
// accepts algo name, date, and code
function storeAlgorithm(name, date, code) {
      // resolve the path between this utility and the pwd
      const filePath = path.resolve(__dirname, 'algoData.json')

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
                  // if no duplicate
                  data.push({ name, date, code })
            }

            // stringify for shipment to json file
            const dataToJSON = JSON.stringify(storage, null, 2)

            // fs method for writing to json file
            fs.writeFileSync('./algoData.json', dataToJSON, {
                  encoding: 'utf8',
                  flag: 'a'
            })

            console.log(filePath)
            console.log('Algorithm(s) saved to storage file')
      } else {
            return 'Incohesive file path'
      }
}

// command line args
// to be accepted as function params
const algoName = process.argv[2]
const algoDate = process.argv[3]
const algoCode = process.argv[4]

// error checking
if (algoName && algoDate && algoCode) {
      storeAlgorithm(algoName, algoDate, algoCode)
} else {
      console.log(__dirname)
      console.log('Please provide the name under which you like to the algorithm to be stored, the date, and the code itself--in that order.')
}
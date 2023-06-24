const fs = require('fs')
const path = require('path')

function storeAlgorithm(name, date, code) {
      const filePath = path.join(__dirname, 'algoData.json')

      let data = []
      if (fs.existsSync('/algoData.json')) {
            const contents = fs.readFileSync(filePath, 'utf8')
            storage = JSON.parse(contents)
      }

      data.push({ name, date, code })

      const dataToJSON = JSON.stringify(data, null, 2)

      fs.writeFileSync('./algoData.json', dataToJSON, { 
            encoding: 'utf8',
            flag: 'a' 
      })

      console.log('Algorithm(s) saved to storage file')
}

const algoName = process.argv[2]
const algoDate = process.argv[3]
const algoCode = process.argv[4]

if(algoName && algoDate && algoCode) {
      storeAlgorithm(algoName, algoDate, algoCode)
} else {
      console.log('Please provide the name under which you like to the algorithm to be stored, the date, and the code itself--in that order.')
}
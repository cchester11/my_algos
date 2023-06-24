const fs = require('fs')
const path = require('path')

function storeAlgorithm(name, date, code) {
      const filePath = path.resolve(__dirname, 'algoData.json')

      if (path.isAbsolute(filePath)) {
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

            console.log(filePath)
            console.log('Algorithm(s) saved to storage file')
      } else {
            return 'Incohesive file path'
      }
}

const algoName = process.argv[2]
const algoDate = process.argv[3]
const algoCode = process.argv[4]

if (algoName && algoDate && algoCode) {
      storeAlgorithm(algoName, algoDate, algoCode)
} else {
      console.log(__dirname)
      console.log('Please provide the name under which you like to the algorithm to be stored, the date, and the code itself--in that order.')
}
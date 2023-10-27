const fs = require('fs');
const path = require('path');
const checkPath = require('../utilities/checkPath');
const write_to_lib = require('../utilities/write_to_lib');

function store_lib() {
      const dataPath = path.join(__dirname, '../json/algoData.json');
      const libPath = path.join(__dirname, '../lib/');

      let data;
      let names = []
      let codes = []

      if (checkPath(dataPath) === 'no exist sync') {
            throw new Error('The json file provided is empty. There is no data to parse.');
      }

      const contents = fs.readFileSync(dataPath, 'utf8');

      data = JSON.parse(contents); // Parse JSON data

      // for loop to store all names and code in respective arrays
      for(let i = 0; i < data.algorithm_storage.length; i ++) {
            let curr = data.algorithm_storage[i]

            names.push(curr.name)
            codes.push(curr.code)
      }

      if(names.length !== codes.length) {
            throw new Error('names and codes arrays do not equal in length')
      }

      const fileNames = fs.readdirSync(libPath).map(fileName => path.basename(fileName, '.js'))
      console.log(fileNames)
      for(let i = 0; i < names.length; i ++) {
            let name = names[i]
            let code = codes[i]
            if(fileNames.includes(names[i])) {
                  continue
            } else {
                  write_to_lib(name, code)
            }
      }

      return
}

store_lib()
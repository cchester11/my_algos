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

console.log(fileNames)

const sortedJsonNames = jsonNames.sort();
console.log(sortedJsonNames)

// must match exactly
// must be same number of lib folder names and object name property names

// return true if all match and lengths are equal
// return this mismatches or extra names if lengths are not equal
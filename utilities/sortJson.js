// import json
// import path and fs modules
const path = require('path');
const fs = require('fs');
// declare path to data 
const dataPath = path.join(__dirname, '../json/algoData.json');
// extrapolate the algorithmStorage array from the json
const dataExtract = fs.readFileSync(dataPath, {
      encoding: 'utf-8'
});
let data = Object.entries(dataExtract.algorithmStorage).map(([key, algorithm]) => {
      return algorithm
})

console.log(data);
// sort the json
const sortData = data.sort((a, b) => {
      // define variables for algorithm names of a and b
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      // sort logic
      if(nameA < nameB) return -1;
      if(nameA > nameB) return 1;
      return 0;
})
// rewrite the file

// export this file as utility
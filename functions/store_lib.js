const fs = require('fs');
const path = require('path');
const checkPath = require('../utilities/checkPath');
const write_to_lib = require('../utilities/write_to_lib');

function store_lib() {
      const dataPath = path.join(__dirname, '../json/algoData.json');

      let data;

      if (checkPath(dataPath) === 'no exist sync') {
            throw new Error('The json file provided is empty. There is no data to parse.');
      }

      const contents = fs.readFileSync(dataPath, 'utf8');
      data = JSON.parse(contents); // Parse JSON data

      console.log(data); // Log the parsed data

      // Now you can process the data as needed
      // Call other functions like write_to_lib here
}
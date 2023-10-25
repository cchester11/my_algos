const fs = require('fs');
const path = require('path');
const write_to_lib = require('../utilities/write_to_lib')

// access data from algoData.json
// parse the data
// go through each algorithm object
// grab the name property
// grab the code property and parse it
// call the write_to_lib function and place in both as parameters

function store_lib () {
      const dataPath = path.join(__dirname, '../json/algoData.json')

      return data
}

module.exports = store_lib;
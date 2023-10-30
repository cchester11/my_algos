const Comparator = require('../utilities/comparator');
const sortArray  = require('../lib/sortArray');

/**
 * Binary search implementation.
 * @param {*[]} array
 * @param {*} seekEl
 * @param {function(a, b)} [comparator]
 * @return {number}
 */

// initiate description
let description = '';

function binarySearch (array, seekEl, comparator) {
      // sort the array
      const sortedArray = sortArray(array);

      // initiate the comparator function 
      let comp = new Comparator(comparator)

      // declare start and end index for the search process
      let startIdx = 0;
      let endIdx = array.length - 1;

      // write for loop used in search process
      while(startIdx <= endIdx) {
            // each loop through calculate the new middle index
            const middleIdx = startIdx + Math.floor(endIdx - startIdx) / 2;

            // return the seekEl if found
            if(comp.equal(sortedArray[middleIdx], seekEl)) {
                  return middleIdx;
            };

            // seek on left or right side according to below condition
            // thus "chopping the sort area in half"
            if(comp.lessThan(sortedArray[middleIdx], seekEl)) {
                  // right
                  startIdx = middleIdx +  1
            } else {
                  // left
                  endIdx = middleIdx - 1
            }
      };

      // return -1 (false) if not found
      return -1;
};

// give description string a value
description = '';

// run jest test manually
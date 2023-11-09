const Comparator = require('../utilities/comparator');
const sortArray = require('../lib/sortArray');

/**
 * Jump (block) search
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a, b)} [comparator]
 */
const jumpSearch = function (array, seekElement, comparatorCallBack = function(a, b) {
      if(a  === b) { 
            return 0
      } return a < b ? 1 : -1;
}) {
      // sort the array
      const sortedArray = sortArray(array);
      // initiate a comparator
      const comparator = new Comparator(comparatorCallBack);
      // calculate the number of indexes in the array
      const arraySize = sortedArray.length;

      // return -1 if no length
      if(!arraySize) {
            return  -1
      }

      // Calculate jump size
      // 4 jumps calculated below
      const jumpSize = Math.floor(Math.sqrt(arraySize))

      // declare the start and end points of the search
      let blockStart = 0;
      let blockEnd = jumpSize;

      // while the seekElement value is less than the values in the search block, continue to the next block
      while(comparator.greaterThan(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1])) {
            // jump to next block
            blockStart = blockEnd;
            blockEnd += jumpSize;

            // check to see if we've covered the whole array
            if(blockStart > arraySize) {
                  return -1
            };
      };

      // do linear search in the block
      let currIdx = blockStart;
      while(currIdx < Math.min(blockEnd, arraySize)) {
            // if found, return
            if(comparator.equal(sortedArray[currIdx], seekElement)) {
                  return currIdx
            }

            // else continue search
            currIdx += 1;
      }

      // if not found at all return -1
      return -1;
};
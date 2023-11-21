const Comparator = require(`../utilities/comparator`);
const sortArray = require(`../lib/sortArray`);

/**
 * Jump (block) search
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallBack]
 */
const jumpSearch = function (array, seekElement, comparatorCallBack = function(a, b) {
      if(a  === b) { 
            return 0
      } return a < b ? 1 : -1;
}) {
      // set up initial variables
      const sortedArray = sortArray(array);
      const arrayLength = sortedArray.length;
      const comparator = new Comparator(comparatorCallBack);

      // if no array length return false
      if(!arrayLength) {
            return -1
      }

      // essentially turning our search into series of three blocks
      const jumpSize = Math.floor(Math.sqrt(arrayLength));

      // block boundaries
      let blockStartIdx = 0;
      let blockEndIdx = jumpSize;

      // while the seekElement is greater than the value in the last index of the current block
      while(seekElement > sortedArray[Math.min(blockEndIdx, arrayLength)]) {
            // move the search to the next block
            blockStartIdx = blockEndIdx;
            blockEndIdx += jumpSize;

            // if we move beyond the scope of the array return false
            if(blockStartIdx > arrayLength) {
                  return -1
            }
      }

      // determine currIdx for below while block
      let currIdx = blockStartIdx;

      // once we've found the seekElement within a block we search that block linearly
      while(currIdx < Math.min(blockEndIdx, arrayLength)) {
            if(sortedArray[currIdx] === seekElement) {
                  return seekElement
            }

            currIdx ++;
      }

      // return -1 if nothing
      return -1
};

console.log(jumpSearch([4,78,98,23,12,34,72,81,96], 72, comparatorCallBack = function(a, b) {
      if(a  === b) { 
            return 0
      } return a < b ? 1 : -1;
}));

test('jump search implementation', () => {
      expect(jumpSearch([4,78,98,23,12,34,72,81,96], 72, comparatorCallBack = function(a, b) {
            if(a  === b) { 
                  return 0
            } return a < b ? 1 : -1;
      })).toBe(72);
});
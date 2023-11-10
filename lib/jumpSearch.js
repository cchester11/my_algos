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
      const sortedArray = sortArray(array);
      const comparator = new Comparator(comparatorCallBack);
      const arrayLength = sortedArray.length;

      if(!arrayLength) {
            console.log(`no length to array`)
            return -1
      }

      const jumpSize = Math.floor(Math.sqrt(arrayLength));

      let blockStartIdx = 0;
      let blockEndIdx = jumpSize;

      while(seekElement > sortedArray[Math.min(blockEndIdx, arrayLength)]) {
            blockStartIdx = blockEndIdx;
            blockEndIdx += jumpSize;

            if(blockStartIdx > arrayLength) {
                  console.log(`surpassed array length during the search`)
                  return -1
            }
      }

      let currIdx = blockStartIdx;

      while(currIdx < Math.min(blockEndIdx, arrayLength)) {
            if(seekElement === sortedArray[currIdx]) {
                  return sortedArray[currIdx]
            }

            currIdx += 1
      }

      return -1
};

console.log(jumpSearch([4,78,98,23,12,34,72,81,96], 96, comparatorCallBack = function(a, b) {
      if(a  === b) { 
            return 0
      } return a < b ? 1 : -1;
}));
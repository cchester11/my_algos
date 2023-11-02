const Comparator = require('../utilities/comparator');
const sortArray  = require('../lib/sortArray');

let testPassed = false;

/**
 * Binary search implementation.
 * @param {*[]} array
 * @param {*} seekEl
 * @param {function(a, b)} [comparatorCallBack]
 * @return {number}
 */

const comparatorCallBack = function (a, b) {
      if (a === b) {
            return 0;
      }

      return a < b ? -1 : 1;
}

function binarySearch (array, seekEl, comparatorCallBack) {
      // sort the array
      const sortedArray = sortArray(array);

      // initiate the comparator function 
      let comparator = new Comparator(comparatorCallBack)

      // declare start and end index for the search process
      let startIdx = 0;
      let endIdx = array.length - 1;

      // write for loop used in search process
      while(startIdx <= endIdx) {
            // each loop through calculate the new middle index
            const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);

            // return the seekEl if found
            if(comparator.equal(sortedArray[middleIdx], seekEl)) {
                  return sortedArray[middleIdx];
            };

            // seek on left or right side according to below condition
            // thus "chopping the sort area in half"
            if(comparator.lessThan(sortedArray[middleIdx], seekEl)) {
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

// run jest test manually
test('Binary search implementation', () => {
      const result = binarySearch([1,5,7,33,53,98,27,84,37,15], 15, comparatorCallBack);

      if(result === 15) {
            testPassed = true
      };

      expect(result).toBe(15);
});

afterAll(() => {
      if(testPassed) {
            console.log('test passed')
            // somehow extract the name of the function (binarySearch in this case), extract the function itself, and subsequently place them in respective variables
      }
});
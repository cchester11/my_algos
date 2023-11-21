const Comparator = require('../utilities/comparator');
const sortArray = require('../lib/sortArray');
const testPass = require('../hooks/testPass');

let testPassed = true;

// afterAll(async () => {
      // await testPass(testPassed)
      // explicit exit call
      // if (global) {
      //       const globalAny = global;
      //       globalAny.jestCircus.event.complete();
      // }
// }, 15000)

const comparatorCallBack = function (a, b) {
      if (a === b) {
            return 0;
      }

      return a < b ? -1 : 1;
}

/**
 * Binary search implementation.
 * @param {*[]} array
 * @param {*} seekEl
 * @param {function(a, b)} [comparatorCallBack]
 * @return {number}
 */
function binarySearch(array, seekEl, comparatorCallBack) {
      // requires Comparator and sortArray functions/classes

      // sort the array
      const sortedArray = sortArray(array);

      // initiate the comparator function 
      let comparator = new Comparator(comparatorCallBack)

      // declare start and end index for the search process
      let startIdx = 0;
      let endIdx = array.length - 1;

      // write for loop used in search process
      while (startIdx <= endIdx) {
            // each loop through calculate the new middle index
            const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);

            // return the seekEl if found
            if (comparator.equal(sortedArray[middleIdx], seekEl)) {
                  return sortedArray[middleIdx];
            };

            // seek on left or right side according to below condition
            // thus "chopping the sort area in half"
            if (comparator.lessThan(sortedArray[middleIdx], seekEl)) {
                  // right
                  startIdx = middleIdx + 1
            } else {
                  // left
                  endIdx = middleIdx - 1
            }
      };

      // return -1 (false) if not found
      return -1;
};

// run jest test manually
test('Binary search implementation', function() {
      const result = binarySearch([1, 5, 7, 33, 53, 98, 27, 84, 37, 15], 15, comparatorCallBack);

      if (result !== 15) {
            testPassed = false
      };

      expect(result).toBe(15);
});
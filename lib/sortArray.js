/**
 * A classic array sort
 * @param {*} array 
 * @returns {*[]}
 */
function sortArray(array) {
  // for loop to sort array
  for (let i = 0; i < array.length;) {
    if (array[i] > array[i + 1]) {
      let a = array[i];
      array[i] = array[i + 1];
      array[i + 1] = a;
      i--;
    } else {
      i++;
    }
  }

  return array
};

sortArray([1, 5, 7, 9, 3, 2, 10, 14])

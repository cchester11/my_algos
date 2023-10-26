function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}


function findMissingNumber(array) {
  let missing;

  sortArray(array)

  for (let i = 0; i < array.length - 1; i++) {
    let curr = array[i]
    let next = array[i + 1]

    if (next - curr !== 1) {
      missing = curr + 1
      break;
    }
  }

  return missing
}

findMissingNumber([1, 3, 2, 7, 6, 5, 4, 9, 8, 11])
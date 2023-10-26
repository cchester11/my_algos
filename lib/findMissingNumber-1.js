function findMissingNumber(array) {
  // set variable to house missing number
  let missing;

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

  console.log(array)

  // for loop to check for missing number
  for (let i = 0; i < array.length; i++) {
    let curr = array[i]
    let next = array[i + 1]

    console.log({
      round: i,
      curr: curr,
      next: next
    })

    if (next !== curr + 1) {
      missing = curr + 1

      return missing;
    }
  }

  // return missing number
  return 'No missing number';
}

findMissingNumber([1, 4, 6, 3, 8, 9, 2, 10]);

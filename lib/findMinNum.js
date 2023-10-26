let test1 = [2, 6, 7, 8, 4, 3, 2, 1, 85]

function findMinNum(array) {
  let minNum = array[0];

  for (let i = 0; i < array.length; i++) {
    let curr = array[i]
    let prev = array[i - 1]

    if (prev === undefined) {
      continue;
    } else if (curr < prev) {
      minNum = curr
    } else {
      continue;
    }
  }

  return minNum
}

console.log(findMinNum(test1))
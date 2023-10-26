let test1 = [5, 2, 9, 1, 7]
let test2 = [10, 6, 3, 8, 4]
let test3 = [-1, -5, -3, -2, -4]

function findMaxNumber(array) {
  let maxNum = 0

  for (let i = 0; i < array.length; i++) {
    let curr = array[i]

    if (curr > maxNum) {
      maxNum = curr
    }
  }

  return maxNum
}

console.log(findMaxNumber(test1), findMaxNumber(test2), findMaxNumber(test3))
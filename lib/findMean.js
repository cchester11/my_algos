let test1 = [2, 6, 7, 8, 4, 3, 2, 1, 85]

function findMean(array) {
  let mean;
  let total = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    total += 1
  }

  mean = sum / total

  return mean;
}

console.log(findMean(test1))
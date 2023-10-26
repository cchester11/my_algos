function sumOfDigits(numbers) {
  let stringify = numbers.toString();
  let sum = 0;

  for (let i = 0; i < stringify.length; i++) {
    let curr = parseInt(stringify[i], 10);
    sum += curr;
  }

  return sum;
}

console.log(sumOfDigits(4282)); // Output: 16
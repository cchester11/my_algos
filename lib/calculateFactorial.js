function calculateFactorial(num) {
  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial = factorial * i
  }

  return factorial
}

console.log(calculateFactorial(7))
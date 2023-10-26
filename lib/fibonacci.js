function fib(n) {
  // declare our array that will house the sequence
  let sequence = [1]
  // declare our curr and pre values used to create the sequencee
  let curr = 1
  let pre = 0
  // conditional statement to return 1 if the n parameter is 1
  if (n === 1) {
    return sequence
  }
  // declare our counter that will count down from our number to zero
  let counter = n - 1
  // a while loop whose condition is counter
  // if our condition is (counter) than while counter is above zero our while loop will stay true and continue running
  while (counter) {
    // define new number for sequence by adding pre to curr
    curr += pre
    // reassign preval by subtracting pre from curr
    pre = curr - pre
    // add curr to our sequence array
    sequence.push(curr)
    // update the counter
    counter -= 1
  }
  // finally return the sequence array

  return sequence
}

console.log(fib(90))
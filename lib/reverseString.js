function reversal() {
  let hello = 'hello'
  let algo = 'algorithm'
  let algo_rev = ''
  let hello_rev = ''

  for (let i = hello.length - 1; i >= 0; i--) {
    hello_rev += hello[i]
  }
  for (let i = algo.length - 1; i >= 0; i--) {
    algo_rev += algo[i]
  }

  return [hello_rev, algo_rev]
}

console.log(reversal())
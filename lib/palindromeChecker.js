function palindromeChecker(word) {
  let reference = ''
  for (let i = word.length - 1; i >= 0; i--) {
    reference += word[i]
  }

  if (word === reference) {
    return true
  }

  return false
}

console.log(palindromeChecker('level'))
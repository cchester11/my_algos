function isValidSubsequence(array, sequence) {
  let check = [];

  if (array.length < sequence.length) {
    return {
      result: false,
      message: 'sequence length is great than array length',
    };
  }

  for (let i = 0; i < sequence.length; i++) {
    let curr = sequence[i];
    let indxOfA = array.indexOf(curr);

    if (indxOfA === -1) {
      return {
        result: false,
        message:
          'An integer from the sequence array did not appear in the reference array',
      };
    }

    check.push(indxOfA);
  }

  for (let i = 0; i < check.length - 1; i++) {
    let curr = check[i];
    let next = check[i + 1];

    if (next !== curr + 1) {
      return {
        result: false,
        message:
          'The subsequence contained integers from the array but not in a sequential order referenced in the array',
      };
    }
  }

  return true
}
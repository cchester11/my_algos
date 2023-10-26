function isAnagram(x, y) {
  let a = x.replace(/[0-9]/g, '')
  let b = y.replace(/[0-9]/g, '')
  a = a.toLowerCase()
  b = b.toLowerCase()

  if (a.length !== b.length) {
    return 'is not anagram'
  }

  let arrB = b.split('')

  for (let i = 0; i < a.length; i++) {
    let curr = a[i]
    let idxB = arrB.indexOf(curr)

    if (idxB === -1) {
      return 'is not anagram'
    }

    arrB.splice(idxB, 1)
  }

  return 'is anagram'
}

isAnagram('silen9T', 'liSten0')
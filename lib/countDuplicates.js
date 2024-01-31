function countDuplicates(arr) {
  let sorted = [...arr].sort((a, b) => a - b)
  
  const duplicates = sorted.reduce((acc, number) => {
    if(acc[number]) {
      acc[number] ++
    } else {
      acc[number] = 1
    }
    
    return acc
  }, {})
  
  let results = {}
  
  for(let key in duplicates) {
    if(duplicates[key] > 1) {
      results[key] = duplicates[key]
    }
  }
  
  return results
}

const inputArray = [1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 7, 9, 10, 11, 10, 1];
console.log(countDuplicates(inputArray));
function returnMissingAndDuplicate (nums) {
  let duplicate = 0;
  let missing = 0;
  
  const sorted = nums.sort((a, b) => a - b);
  
  for(let i = 0; i < sorted.length; i ++) {
    let next = sorted[i + 1]
    let curr = sorted[i]
    
    if(next - curr !== 1) {
      missing = curr - 1
    }
  }
  
  sorted.reduce((acc, num) => {
    if(acc[num]) {
      duplicate = acc[num]
      
      return acc
    } else {
      acc[num] = num
      
      return acc
    }
  }, {})
  
  return {
    missing: missing,
    duplicate: duplicate
  }
}

console.log(returnMissingAndDuplicate([3, 1, 0, 2, 5, 3]));
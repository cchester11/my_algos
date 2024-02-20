function findPairs (array, integer) {
  let pairs = [];
  const sorted = array.sort((a, b) => a -  b);
  let pointers = [];
  
  for(let i = 0; i < sorted.length; i ++) {
    let pointer = sorted[i]
    
    if(pointers.includes(pointer)) {
      continue;
    }
    
    pointers.push(pointer)
  
    for(let j = i + 1; j < sorted.length; j ++) {
      let sum = sorted[i] + sorted[j]
      let finder = sorted[j]
      
      if(sum === integer) {
        pairs.push([pointer, finder])
      }
    }
  }
  
  return pairs;
}

console.log(findPairs([1,4,6,5,4,3,7], 11))
// [[6, 5], [7, 4]]
console.log(findPairs([6,9,2,3,4,11,2,3], 15))
// [[6, 9], [4, 11]]
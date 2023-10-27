function cartesian_product (setA, setB) {
  if(!setA || !setB || !setA.length || !setB.length) {
    return null
  }
  
  const product = []
  
  // will loop through the next idxA of setA each iteration
  // will loop through all indexes of setB through each iteration
  for(let idxA = 0; idxA < setA.length; idxA ++) {
    for(let idxB = 0; idxB < setB.length; idxB ++) {
      product.push(setA[idxA], setB[idxB])
    }
  }
  
  return product
}

console.log(cartesian_product([1,2,3], [a, b, c, d, e]))
/**
 * @param {string} a
 * @param {string} b
 * return {number}
*/
function hammingDistance (a, b) {
  // error check for inconsistent lengths
  if(a.length !== b.length) {
    throw new Error('Strings must be of same length');
  }
  
  // initiate our distance variable
  let distance = 0
  
  // loop through a or b to and calculate the hammingDistance
  for(let i = 0; i < a.length; i ++) {
    if(a[i] !== b[i]) {
      distance ++
    }
  }
  
  // return distance
  return distance
}

console.log(hammingDistance('goliatihing', 'goliantiers'))
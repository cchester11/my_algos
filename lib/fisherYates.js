/**
 * return a random set of numbers
 * @param {*[]} originalArray
 * @return {*[]}
 */
function fisherYates (array) {
  // use the slice method to create a copy of our array
  let clone = array.slice(0);
  
  // for visual reference regarding the use of the slice method
  console.log({clone: clone});
  
  // loop through the clone array going backwards
  for(let i = (clone.length - 1); i > 0; i --) {
    // grab a random index from the clone array
    const randomIdx = Math.floor(Math.random() * (i + 1));
    // swap the current index of clone with the randomly chosen one
    [clone[i], clone[randomIdx]] = [clone[randomIdx], clone[i]];
  } 
  // return our clone
  return clone;
}

console.log(fisherYates([1,45,3,78,324,577,33,2,4,656]))
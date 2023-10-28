/**
 * @param {string} a
 * @param {string} b
 * return {number}
*/
function hammingDistance (a, b) {
  // error check for inconsistent lengths
  if(a.length !== b.length) {
    throw new Error(Strings
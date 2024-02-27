const isValidBracket = (string) => {
  let map = {
    '{': 1,
    '}': 2,
    '(': 3,
    ')': 4,
    '[': 5,
    ']': 6
  }
  
  for (i = 0; i < string.length; i ++) {
    let curr = string[i]
    let next = string[i + 1]
    let nextNext = string[i + 2]
    
    if(map[curr] !== undefined) {
      if(map[next] - map[curr] !== 1) {
        if(map[nextNext]) {
          if(map[nextNext] - map[next] !== 1) {
            return false
          }
        }
      }
    }
  }
  
  return true; // Valid sequence of brackets
};

console.log(isValidBracket('()[]{}[]')); // true
console.log(isValidBracket('[){}(]')); // false
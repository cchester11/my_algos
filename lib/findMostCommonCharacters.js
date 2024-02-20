const findMostCommonCharacters = (string) => {
  // establish a variable for common characters storage
  let commonCharacters = {}
  // split the string
  let characters = string.toLowerCase().replace(/[^a-z]/g, );
  
  // loop through characters and store each character with its respective key
  for(let i = 0; i < characters.length; i ++) {
    let curr = characters[i]
    
    if(commonCharacters[curr]) {
      commonCharacters[curr] ++
    } else {
      commonCharacters[curr] = 1
    }
  }
  
  let max = 0;
  let mostCommon = [];
  
  // find key in duplicates with highest value
  for(let key in commonCharacters) {
    if(commonCharacters[key] > max) {
      max = commonCharacters[key]
      mostCommon = [key]
    } else if(commonCharacters[key] === max) {
      mostCommon.push(key)
    }
  }
  
  return {
    max: max,
    characters: mostCommon
  };
}
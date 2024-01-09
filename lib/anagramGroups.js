const words = [eat, tea, tan, ate, nat, bat];

//reduce words to groups of anagrams
const anagramGroups = words.reduce((acc, word) => {
  // strip each word to its a-z sort
  const key = [...word].sort().join()
  // initialize an array in the acc object with value of array or acc[key] which will be the returned data from last iteration
  acc[key] = acc[key] || []
  // push word to its array in the acc object
  acc[key].push(word)
  // return acc to update state
  return acc
}, {})

console.log(anagramGroups)
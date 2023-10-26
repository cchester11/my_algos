function copyAndAddElement(array, element) {
  if (array.length <= 1) {
    console.log('length equal to 1')
    return [array, element]
  }
  return [...array, element]
}

console.log(copyAndAddElement([33], 4))
console.log(copyAndAddElement([14, 938, 733], 'new element'))
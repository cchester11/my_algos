const test1 = 'hOW aRE yOU?'
const test2 = 'javascript is awesome'

function toSentence(param) {
  let array = param.split('')
  let sentence = []
  for (let i = 0; i < array.length; i++) {
    let curr = array[i]

    if (curr === array[0]) {
      let item = curr.toUpperCase()
      sentence.push(item)
    } else {
      let item = curr.toLowerCase()
      sentence.push(item)
    }
  }

  sentence = sentence.join('')

  return sentence
}

console.log(toSentence(test1), toSentence(test2))
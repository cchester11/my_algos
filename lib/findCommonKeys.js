let places = {
  '7': 'SanAntonio',
  '5': 'Houston',
  '4': 'Atlanta'
}

let people = {
  '5': 'Tony',
  '4': 'Bill',
  '7': 'Sarah'
}

function findCommonKeys(obj1, obj2) {
  let commonKeys = []

  // loop through each key of obj1
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      commonKeys.push(key)
    }
  }

  return commonKeys
}

function combineTwoObjects(obj1, obj2) {
  commonKeys = findCommonKeys(obj1, obj2)

  const combinedObject = {}
  commonKeys.forEach(key => {
    combinedObject[key] = obj1[key] + ' ' + obj2[key]
    delete obj1[key]
    delete obj2[key]
  })

  return { ...obj1, ...combinedObject, ...obj2 }
}

console.log(combineTwoObjects(places, people))
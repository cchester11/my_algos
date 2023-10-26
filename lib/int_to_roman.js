function intToRom(number) {
  const romNums = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let result = ''

  for (const key in romNums) {
    while (number >= romNums[key]) {
      result += key
      number -= romNums[key]
    }
  }

  return result
}

console.log(intToRom(78))
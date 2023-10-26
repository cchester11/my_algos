function romToInt(numeral) {
  const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  // set result and i to 0

  // result will accumulate the interpreted number translation
  let result = 0;
  // i will help us match the numerals to our number values for translation 
  let i = 0;

  // until we've matched each roman numeral,  the loop will continue
  while (i < numeral.length) {
    if (i + 1 < numeral.length && numerals[numeral[i] + numeral[i + 1]]) {
      result += numerals[numeral[i] + numeral[i + 1]];
      i += 2;
    } else {
      result += numerals[numeral[i]];
      i++;
    }
  }

  return result;
}

console.log(romToInt('MMMMMMDCCLXXXIII'));
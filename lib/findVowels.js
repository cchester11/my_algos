let test1 = 'Hello World';
let test2 = 'Javascript';

function findVowels(string) {
  let amount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let array = string.split('');

  for (let i = 0; i < array.length; i++) {
    let curr = array[i];

    if (vowels.includes(curr)) {
      amount++;
    }
  }

  return amount;
}

console.log(findVowels(test1), findVowels(test2));
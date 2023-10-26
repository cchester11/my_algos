const words = ['apple', 'banana', 'grape', 'strawberry', 'melon', 'character'];
const minLength = 6;

function filterLongWords(array, amount) {
   let longOnes = []

   for (let i = 0; i < array.length; i++) {
      if (array[i].length > amount) {
         longOnes.push(array[i])
      }
   }

   return longOnes
}

const longWords = filterLongWords(words, minLength);
console.log(longWords); // Output: ['banana', 'strawberry']
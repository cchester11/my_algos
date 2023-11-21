function generateFibSequence(n) {
      // if n is less than 0, equal to 1, or equal to 2 return [], [0], or [0, 1]
      if(n <= 0) {
            return []
      } else if(n === 1) {
            return [0]
      } else if(n === 2) {
            return [0, 1]
      }

      // use Array constructor to create an array with (n) indexes and fill method to fill all with null
      const sequence = Array(n).fill(null);

      // initiate first two numbers of the sequence array
      sequence[0] = 0;
      sequence[1] = 1;

      // for loop to generate the sequence
      for(let i = 2; i < n; i ++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2]
      }

      // return the sequence
      return sequence;
};

console.log(generateFibSequence(50));
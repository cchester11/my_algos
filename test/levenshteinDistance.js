function levenshteinDistance (a, b) {
      // create an array equal in length to the length of b + 1 and fill with null values
      // then map through each index and fill that index with a subarray equal in length to a + 1 and fill with null values
      const fillB = Array(b.length + 1).fill(null);
      const distanceMatrix = fillB.map(() => {
            return Array(a.length + 1).fill(null)
      })

      return distanceMatrix;
};

console.log(levenshteinDistance('homosapien', 'ape'));
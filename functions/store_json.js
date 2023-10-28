// dependencies
const storeAlgorithm = require('./store_algorithm');

// command line args
// to be accepted as function params
const algoName = process.argv[2]
const algoDate = process.argv[3]
const algoDiff = process.argv[4]
const algoCode = process.argv[5]

// error checking or run the storeAlgorithm function
try {
      if (algoName && algoDate && algoDiff && algoCode) {
            storeAlgorithm(algoName, algoDate, algoDiff, algoCode)
      } else {
            console.log(__dirname)
            throw new Error('This function accepts 4 arguments.\n Please provide the name under which you like to the algorithm to be stored, the date, the difficulty (easy, medium, or hard), and the code itself--in that order.')
      }
} catch (err) {
      if(err) {
            throw new Error(err)
      }
}

function checkDuplicate (name, code, data) {
      // prevent duplicate entry
      let findItem = data.find(item => item.name === name)
      if (findItem) {
            throw new Error('Found a matching name property in the database. Please provide a unique name for your algorithm')
      } else {
            let check = []
            let array = code.split('')

            for (let i = 0; i < array.length; i++) {
                  let curr = array[i]
                  check.push(curr)
            }

            if (check.includes('"')) {
                  throw new Error(`Please use ' characters in the place of " characters`)
            }
      }
}

module.exports = checkDuplicate;
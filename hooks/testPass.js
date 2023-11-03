const inquirer = require('inquirer');

/**
 * The result param should be true or false. The function will execute an inquirer prompt.
 * @param {boolean} result 
 * @return {Promise}
 */
function testPass(result) {
      if (result) {
            return new Promise(function (resolve, reject) {
                  inquirer.prompt([
                        {
                              type: "input",
                              name: "fileName",
                              message: "Please provide a file name for this function. The same name that you used to title the function  is recommended."
                        },
                        {
                              type: "input",
                              name: "functionBlock",
                              message: "Copy and paste the function block into the prompt."
                        },
                        {
                              type: "list",
                              name: "difficulty",
                              message: "What difficulty level would you rate this algorithm under?",
                              choices: [
                                    "Easy",
                                    "Medium",
                                    "Hard"
                              ],
                              filter(val) {
                                    return val.toLowerCase()
                              }
                        }
                  ])
                        .then(answers => {
                              console.log(answers);
                              resolve();
                        })
                        .catch((err) => {
                              if (err.isTtyError) {
                                    reject(new Error("Prompt couldn't be rendered in the current environment"));
                              } else {
                                    reject(new Error("Error: " + err));
                              }
                        });
            })
      } else {
            reject( new new Error("Test failed. testPass hook returning error."));
      }
};

module.exports = testPass;
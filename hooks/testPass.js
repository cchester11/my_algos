const inquirer = require('inquirer');

/**
 * The result param should be true or false. The function will execute an inquirer prompt.
 * @param {boolean} result 
 * @return {Promise}
 */
function testPass(result) {
      if (result) {
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
                        })
                        .catch((err) => {
                              if (err.isTtyError) {
                                    throw new Error("Prompt couldn't be rendered in the current environment");
                              } else {
                                    throw new Error("Error: " + err);
                              }
                        });
      } else {
            throw new Error("Test failed. testPass hook returning error.");
      }
};

module.exports = testPass;
class CustomReporter {
      constructor(globalConfig, options) {
            this._globalConfig =  globalConfig;
            this._options = options;
      }

      onRunComplete(contexts, results) {
            if(results.numPassedTest > 0) {
                  console.log('Custom Reporter: Test passed');

                  results.testResults
                        .filter((testResult) => testResult.numFailingTest === 0)
                        .forEach((testResult) => {
                              const functionName = testResult.ancestorTitles[0];

                              console.log(functionName);
                              console.log('testResult: ' + testResult)
                        })
            }
      }
};

module.exports = CustomReporter;
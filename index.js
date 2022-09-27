const core = require('@actions/core');
const github = require('@actions/github');

try {
//  const something = core.getInput('something');
// console.log(`Hello ${something}!`);
  const url = https://api.quotable.io/random
  var response = fetch(url);
  const quote = response.content;
  core.setOutput("quote", quote);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
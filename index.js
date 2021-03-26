const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "List any necessary installation commands:",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide a relative path to a video walk through of your app in use:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Where can people go to contribute?",
    },
    {
      type: "input",
      name: "functionality",
      message: "Enter instructions to run your app:",
    },
  ])
  .then(function (data) {
    console.log(data);
    writeFile(data);
  });

function writeFile(data) {
  let output =
  `# ${data.title}\n` +
  `## Output \n ${data.description}\n` +
  "## Installation \n This app relies on certain dependencies that will need to be downloaded to successfully run it. To do this, enter the following command from your terminal:\n```\n" +
  data.installation +
  "\n```\n" +
  `## Usage\n[Video Walk-through]("${data.usage}")\n` +
  `## Contribute\n${data.contribution}\n` +
  `## Use this App\n ${data.functionality}\n`;

  fs.writeFile(`README.md`, output + "\n", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}


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
        message: "Provide a relative path to a video walk through of your app in use:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Where can people go to contribute?"
    },
    {
        type: "input",
        name: "functionality",
        message: "Enter instructions to run your app:"
    }
  ])
  .then(function (data) {
    console.log(data);
    writeFile(data.title);
    appendDescription(data.description);
    appendInstallation(data.installation);
    appendUsage(data.usage);
    appendContribution(data.contribution);
    appendFunctionality(data.functionality);
  });

function appendFile(output) {
    fs.appendFile("README.md", output + "\n", function (err) {
        if (err) throw err;
      });
}

function writeFile(title) {
  let output = `# ${title}`;
  fs.writeFile(`README.md`, output + "\n", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

function appendDescription(description) {
  let output = `## Output \n ${description}`;
  fs.appendFile(`README.md`, output + "\n", function (err) {
    if (err) throw err;
  });
}

function appendInstallation(installation) {
  let output =
    "## Installation \n This app relies on certain dependencies that will need to be downloaded to successfully run it. To do this, enter the following command from your terminal:\n```\n"+installation+"\n```";
  appendFile(output);
}

function appendUsage(usage) {
    let output = `## Usage\n[Video Walk-through]("${usage}")`
    appendFile(output);
}

function appendContribution(contribution) {
    let output = `## Contribute\n${contribution}`;
    appendFile(output);
}

function appendFunctionality(functionality) {
    let output = `## Use this App\n ${functionality}`;
    appendFile(output);
}

// writeFile("test");
// appendDescription("test", testText)

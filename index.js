const fs = require("fs");
const inquirer = require("inquirer");

let output = "Hello World";

function writeFile() {
  fs.writeFile("log.txt", output, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

writeFile();
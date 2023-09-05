// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// Description, Installation, Usage, Contributing, and Tests
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "Title",
  },
  {
    type: "input",
    message: "What is the description?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you use?",
    name: "Usage",
  },
  {
    type: "input",
    message: "Who made it?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "How do you test?",
    name: "tests",
  },
  {
    type: "list",
    message: "What license?",
    name: "license",
    choices: ["MIT", "GNU", "Apache", "BSD"],
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];
// TODO: Create a function to write README file
function createREADME() {
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("README.MD", generateMarkdown(response), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Response has been saved to README.MD");
      }
    });
  });
}

createREADME();

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

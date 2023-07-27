// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of you project?\n",
      name: "Title",
    },
    {
      type: "input",
      message: "Give a description of your project.\n",
      name: "Description",
    },
  ])
  .then((response) => {
    const jsonString = JSON.stringify(response, null, 2);

    const filePath = "README.MD";

    // TODO: Create a function to write README file
    // function writeToFile(README, questions) {
    // }
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Response has been saved to", filePath);
      }
    });
  });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

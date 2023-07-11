const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the logo text"
    },
    {
        type: "input",
        name: "color",
        message: "Enter the color the text should be"
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo",
        choices: ["Circle", "Square", "Triangle"]
    }
];

function init() {
    inquirer.prompt(questions)
    .then((res) => {
        const logoAnswers = new writeToFile(res);
        logoAnswers.file();
    });
}

init();

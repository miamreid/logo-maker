const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");



// class SVG {
//     constructor() {
//         this.text = '',
//         this.shape = ''
//     }
//     render() {
//         return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="500">${this.shape}${this.text}</svg>`
//     }
//     renderText(text, color) {
//         this.text = `<text x="250" y="250" font-size="75" text-anchor="middle" fill="${color}">${text}</text>`
//     }
//     renderShape(shape) {
//         this.shape = shape.render()
//     }
// }

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the logo text",
    },
    {
        type: "input",
        name: "color",
        message: "Enter the color the text should be",
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "fill",
        message: "Enter the color the shape should be",
    },
];
let shape;
let logoText = "";

function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        switch (answers.shape) {
            case "Triangle":
                shape = new Triangle();
                shape.fillColor(answers.fill);
                logoText = shape.render();
                break;
            case "Square":
                shape = new Square();
                shape.fillColor(answers.fill);
                logoText = shape.render();
                break;
            case "Circle":
                shape = new Circle();
                shape.fillColor(answers.fill);
                logoText = shape.render();
                break;
        }

        let SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${logoText}
        <text x="150" y="170" font-size="50" text-anchor="middle" fill="${answers.color}">${answers.text}</text>
        </svg>`;

        return writeToFile("logo.svg", SVG);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        err
        ? console.error(err)
        : console.log("SVG logo rendered successfully—Hooray!");
    });
}

init();
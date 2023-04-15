const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require('./shapes');

const SHAPES = ["triangle", "circle", "square"];

const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: SHAPES,
  },
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters to insert in the shape:",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Type a color keyword (OR a hexadecimal number) for the text:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Type a color keyword (OR a hexadecimal number) for the shape:",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeObj;

  switch (shape) {
    case "triangle":
      shapeObj = new Triangle();
      break;
    case "circle":
      shapeObj = new Circle();
      break;
    case "square":
      shapeObj = new Square();
      break;
  }

  shapeObj.setColor(shapeColor);

  const svg = `<svg width="300" height="200">
      ${shapeObj.render()}
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

  fs.writeFile("./output/logo.svg", svg, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
});

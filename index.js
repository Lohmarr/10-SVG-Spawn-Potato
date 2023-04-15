const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require('./lib/shapes');

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
    message: "Type a color keyword (OR a hexadecimal number) for the three characters:",
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
  let svgParams;


  switch (shape) {
    case "triangle":
      shapeObj = new Triangle();
      svgParams = `x="50%" y="80%" font-size="70"` 
      break;
    case "circle":
      shapeObj = new Circle();
      svgParams = `x="50%" y="64%" font-size="80"`
      break;
    case "square":
      shapeObj = new Square();
      svgParams = `x="50.5%" y="60%" font-size="60"`
      break;
  }

  shapeObj.setColor(shapeColor);

  let svg = `<svg width="300" height="200">
      ${shapeObj.render()}
      <text ${svgParams} text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
    </svg>`;

  fs.writeFile("./output/logo.svg", svg, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
});

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function writeToFile(fileName, answers) {
let svgShapeString = '';
svgShapeString = 
'<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
svgShapeString += `${answers.shapeList}`;
let shapeSelection;
if (answers.shapeList === 'Circle') {
    shapeSelection = new Circle();
    svgShapeString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
} else if (answers.shapeList === 'Triangle') {
    shapeSelection = new Triangle();
    svgShapeString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
} else {
    shapeSelection = new Square();
    svgShapeString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
}
svgShapeString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.logoText}</text>`;
svgShapeString +=  "</svg>"

fs.writeFile(fileName, svgShapeString, (err) => {
    err ? console.log(err) : console.log('Generated logo.svg');
  });
}
function parameters () {

inquirer
.prompt([
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter text (up to three characters) you would like your logo to contain.',
  
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',

    },
    {
        type: 'list',
        name: 'shapeList',
        message: 'What shape would you like your logo to be?',

        choices: [
            'Circle',
            'Triangle',
            'Square',
        ],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',

    },
])
.then((answers) => {
    if (answers.logoText.legnth > 3) {
        console.log('Please enter text no greater than 3 characters long!');
        init();
    } else {

        writeToFile('logo.svg', answers);
    }
    });
}
parameters();


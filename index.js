const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function writeToFile(fileName, answers) {
let svgString = 
}

const parameters = [
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
]
.then((answers) => {
    if (answers.logoText.legnth > 3) {
        console.log('Please enter text no greater than 3 characters long!');
        init();
    } else {

        writeToFile('logo.svg', answers);
    }
    });

function init() {


    console.log(`Please respond to the following prompts to generate your README!`);
  
    inquirer.prompt(parameters)
    .then(logoData => {
writeToFile('/Users/danielrescigno/pen_bootcamp/challenges/dans-svg-logo-maker/examples', generateLogo(logoData))
    })
};

// Function call to initialize app
init();


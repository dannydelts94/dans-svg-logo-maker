const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/shapes');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter text (up to three characters) you would like your logo to contain.',
        validate: logoTextInput => {
            if (logoTextInput) {
                return true;
            } else {
                console.log('Please enter text for your logo!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
        validate: textColorInput => {
            if (textColorInput) {
                return true;
            } else {
                console.log('Please enter a color keyword!');
                return false;
            }

        }
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
        validate: shapeColorInput => {
            if (shapeColorInput) {
                return true;
            } else {
                console.log('Please enter a color keyword!');
                return false;
            }

        }
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('Your README was created!');
    })

}

// TODO: Create a function to initialize app
function init() {


    console.log(`Please respond to the following prompts to generate your README!`);
  
    inquirer.prompt(questions)
    .then(readmeData => {
writeToFile('/Users/danielrescigno/pen_bootcamp/challenges/dans-readme-generator/output/readme.md' , generateMarkdown(readmeData))
    })
};

// Function call to initialize app
init();


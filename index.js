// Variable and dependancies

const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const asyncWriteFile = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input

function questionPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of the project: '
        },
        {
            type: 'input',
            name: 'install',
            message: 'Describe the installation process for your project if applicable: '
        },
        {
            type: 'input',
            name: 'utility',
            message: 'What utilities or usage does your project provide?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select an appropriate license for your project: ',
            choices: [
                'Academic',
                'Apache',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who helped to contribute on this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Does your project contain a test?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What should I do if I encounter an issue?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username: (Required)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email: '
        },
    ]);
}
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await questionPrompt();
        // const displayContent = displayReadme();
        // write README to dist
 }   catch(err) {
    console.log(err);
 }
}

// Function call to initialize apps
init();

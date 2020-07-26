const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function prompt() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Give a short description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Any special instructions for installation',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How does one run this file?',
            name: 'usage'
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input',
            message: 'Who are the contributors to this project?',
            name: 'contributors'
        },
        {
            type: 'input',
            message: 'insert any screenshot links here.',
            name: 'test'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },

        {
            name: 'Questions'
        },
    ]);
}

function generateReadMe(answers) {
    return `
    [![License: Github License](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://github.com/dylandewey/Readmegenerator.git)

# ${answers.title}
    
## Description:
    ${answers.description}
    
## Table of Contents:
### 1. [Installation](#Installation)
### 2. [Usage](#Usage)
### 3. [License](#License)
### 4. [Contributors](#Contributors)
### 5. [Tests](#Tests)
### 6. [Questions](#Questions)
    
## Installation:
    ${answers.installation}
    
## Usage:
    ${answers.usage}
    
## License:
    ${answers.license}
    
## Contributors:
    ${answers.contributors}
    
## Test:
    ${answers.tests}
    
## Questions:
    For more informtion about this application please refer to my Github: [${answers.github}](https://github.com/${answers.github}/Readmegenerator.git)
    Or contact me by email: ${answers.email}`
}

prompt()
    .then(function (answers) {
        let README = generateReadMe(answers);

        return writeFileAsync('README.md', README)
    })
    .then(function () {
        console.log("Successfully wrote README");
    })
    .catch(function (err) {
        console.log(err);
    });

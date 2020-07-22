const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
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
            name: 'Installation'
        },
        {
            type: 'input',
            message: 'How does one run this file?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What type of license would you like to have for this readme?',
            name: 'License',
            choices: [
                'MIT',
                'Drivers',
                'Pilots'
            ]
        },
        {
            type: 'input',
            message: 'Who are the contributors to this project?',
            name: 'Contributors'
        },
        {
            type: 'input',
            message: 'Do you have any questions?',
            name: 'questions'
        },
    ])
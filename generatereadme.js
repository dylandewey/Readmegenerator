function generateMarkdown(response) {
    return `
    ![GitHub license](https://img.shields.io/badge/license-${answers.license}-bluehttps://img.shields.io/badge/license-${answers.license}-bluehttps://img.shields.io/badge/license-${answers.license}-blue.)
# ${answers.title};

## Description:
${answers.description};

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
For more informtion about this application please refer to my Github: [${answers.github}](https://github.com/${answers.github})
Or contact me by email: ${answers.email}
`
}
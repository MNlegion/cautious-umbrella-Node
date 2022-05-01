
function displayReadme(answers) {

  return `

  <h1 align='center'>${answers.projectTitle}</h1>

  ![license](https://img.shields.io/badge/license-${answers.license}-informational)

  ## Description
    ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Utility](#utility)
  - [License](#license)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
    ${answers.install}

  ## License
  ![license](https://img.shields.io/badge/license-${answers.license}-informational)
  <br />
  Covered under the ${answers.license} license.

  ## Contributers
    ${answers.contributers}

  ## Tests
    ${answers.tests}

  ## Questions
    ${answers.questions}

  View my GitHub Profile: [${answers.username}](https://github.com/${answers.username})

  Contact me: ${answers.email}
`;
}

module.exports = displayReadme;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function displayReadme() {
  // return `# ${data.title}

  return `

  <h1 align='center'>${answers.projectTitle}</h1>

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
    ${answers.license}

  ## Contributers
    ${answers.contributers}

  ## Tests
    ${answers.tests}

  ## Questions
    ${answerrs.questions}

  View my GitHub Profile: [${answers.username}](https://github.com/${answers.username})

  Contact me: ${answers.email}
`;
}

module.exports = displayReadme;

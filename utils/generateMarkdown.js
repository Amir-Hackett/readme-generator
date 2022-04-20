// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'Mozilla') {
    return `
  ![${license}](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
  `
  } else if (license == 'MIT') {
    return `
  ![${license}](https://img.shields.io/badge/License-MIT-yellow.svg)
  `
  } else if (license == 'GPL') {
    return `
  ![${license}](https://img.shields.io/badge/License-GPL_v2-blue.svg)
  `
  } else if (license == 'GPL') {
    return `
  ![${license}](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)
  `
  } else if (license == 'Apache') {
    return `
  ![${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
  `
  } else if (license == 'None') {
    return ''
  }
};

// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'Mozilla') {
    return `
  This application is covered under [The Mozilla License](https://opensource.org/licenses/MPL-2.0). 
  `
  } else if (license == 'MIT') {
    return `
  This application is covered under [MIT License](https://opensource.org/licenses/MIT).
    `
  } else if (license == 'GPL') {
    return `
  This application is covered under [GPL License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).
    `
  } else if (license == 'Boost') {
    return `
  This application is covered under [Boost](https://www.boost.org/LICENSE_1_0.txt). 
  `
  } else if (license == 'Apache') {
    return `
  This application is covered under [Apache License](https://opensource.org/licenses/Apache-2.0.
    `
  } else if (license == 'None') {
    return ''
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return ''
  } else {
    return `##License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
 ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Languages](#languages)
  * [Contributing](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)}

  ## Languages
  This Project uses built using the following languages: ${data.languages} 

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
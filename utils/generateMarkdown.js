// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';  
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   switch (license) {
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL':
        return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'Boost':
        return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = `## License`
  switch (license) {
  case 'Mozilla':
  return `${licenseSection}
  This project is licensed under the Mozilla license.
  To learn more about the Mozilla license, visit their site at ${renderLicenseLink(license)}`;
  case 'MIT':
   return `${licenseSection}
   This project is licensed under the MIT license.
  To learn more about the MIT license, visit their site at ${renderLicenseLink(license)}`;
  case 'GPL':
  return `${licenseSection}
  This project is licensed under the GPL license.
  To learn more about the GPL license, visit their site at ${renderLicenseLink(license)}`;
  case 'Boost':
  return `${licenseSection}
  This project is licensed under the Boost license.
  To learn more about the Boost license, visit their site at ${renderLicenseLink(license)}`;
  case 'Apache':
  return `${licenseSection}
  This project is licensed under the Apache license.
  To learn more about the Apache license, visit their site at ${renderLicenseLink(license)}`;
  default:
  return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

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

  ## License
  This Project is licensed under ${data.license}

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
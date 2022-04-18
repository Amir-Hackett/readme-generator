// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// link to markdown generator
const generatePage = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    //this creates the key value of the questions
    return inquirer.prompt([
        {
           type: 'input',
           name: 'github',
           message: 'What is your GitHub username? (Required)',
           validate: nameInput => {
            if (nameInput){
              return true
            } else {
              console.log('Please enter your GitHub name!')
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: nameInput => {
             if (nameInput){
               return true
             } else {
               console.log('Please enter your email address!')
               return false;
             }
           }
         },
         {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project:'
          },
          {
            type: 'input',
            name: 'description',
            message: 'What are the installation instructions?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'What are the instructions for the use of your project?'
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses did you use for this project? (Check all that apply)',
            choices: ['Mozilla', 'MIT', 'GNU', 'Boost', 'none', 'Bootstrap', 'Node']
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'instructions',
            message: 'Please give instructions on how to run tests on your project:'
          },
          {
            type: 'input',
            name: 'questions',
            message: 'How would we reach you with questions regarding your project?'
          },
    ])
};

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    // writes readme file in dist folder
    fs.writeFile('./dist/README.md', data, (err)=> {
        // if error there's an error
        if (err) throw err
        //if successful
        console.log('README has been successfully created in dist folder!')
    })
}

// TODO: Create a function to initialize app
// Promise Chain: Series of Promise-based functions that run in order
function init() {
    questions()
    //gets user answers
    .then(answers => {
        return generatePage(answers)
    })
    //use answer data to display on page
    .then(data => {
        return writeFile(data)
    })
    // if error
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
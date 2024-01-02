const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Readme Heading',
      name: 'Your Name',
    },
    {
      type: 'input',
      message: 'README Heading',
      name: 'heading',
    },
    {
      type: 'input',
      message: 'Project description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Your ID? (optional)',
      name: 'Requred',
    },
    {
      type: 'input',
      message: 'Requirements?',
      name: 'requirements',
    },
    {
      type: 'input',
      message: 'How to use it?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Your Full Name?',
      name: 'author',
      default: 'Mr Sheikh Ali',
    },
    {
      type: 'input',
      message: 'Your Email? (also used for gravatar profile photo)',
      name: 'email',
      default: 'info@example.com',
    },
    {
      type: 'input',
      message: 'Your Twitter username?',
      name: 'twitter',
      default: '------ by deafult',
    },
    {
      type: 'input',
      message: 'Your Personal Webpage?',
      name: 'website',
      default: 'https://--------',
    },
    {
      type: 'input',
      message: 'GitHu account?',
      name: 'github',
      default: 'mirpur33',
    },
    {
      type: 'list',
      message: 'License?',
      name: 'license',
      choices: ['MIT', 'ISC', 'MPL', 'GPL', 'AGPL'],
      default: 'MIT',
    },
  ])
  .then((data) => {
    const fullReadmePath = path.resolve(__dirname, `../tmp/${README_FILENAME}`);

    fs.writeFile(fullReadmePath, generateMarkdown(data), (err) =>
      err
        ? console.log(err)
        : console.log(`Your ${README_FILENAME} has been generated at ${fullReadmePath}! 🚀`)
    );
  });
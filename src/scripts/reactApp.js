const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const {prompt} = require('inquirer');

const questions = [{
  type: 'input',
  name: 'appName',
  message: 'Name of your application?'
}]

const reactApp = () => {
  prompt(questions).then(answers => {
    const {
      appName
    } = answers;

    console.info('Creating new react application ' + chalk.yellow(appName));

    // run create-react-app
    shell.exec(`create-react-app ${appName}`);
  });
}

module.exports = reactApp
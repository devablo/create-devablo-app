const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const {prompt} = require('inquirer');

const createDefaultStructure = () => {
  let source = path.resolve(__dirname, '../template');
  let destination = process.cwd();
  console.info('Copying files to ' + chalk.yellow(`Destination: ${destination}`));
  shell.cp('-rn', `${source}/*`, `${destination}`);
}

const questions = [{
    type: 'input',
    name: 'appName',
    message: 'Name of your application?'
  },{
    type: 'input',
    name: 'authorName',
    message: 'Name of application owner/developer?'
  }, {
    type: 'input',
    name: 'authorEmail',
    message: 'Email of application owner/developer?'
  }, 
]

const setup = () => {
  prompt(questions).then(answers => {
    const {
      appName,
      authorName,
      authorEmail
    } = answers;

    let jsAppPath = './src/server.js'
    console.info('Initializing ' + chalk.yellow(appName));
    const packageJson = {
      name: appName,
      version: '0.1.0',
      private: true,
      main: jsAppPath,
      scripts: {
        start: `node ${jsAppPath}`
      },
      author: `${authorName} <${authorEmail}>`,
    };

    let root = process.cwd();
    console.info('Creating package.json in ' + chalk.yellow(`${root}`));

    fs.writeFileSync(
      path.join(root, 'package.json'),
      JSON.stringify(packageJson, null, 2)
    );

    createDefaultStructure();
  });
}

module.exports = setup
const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const {prompt} = require('inquirer');

const questions = [
{
  type: 'input',
  name: 'root',
  message: chalk.blue('What should should the root source folder be? \nIf empty this will default to src ')
}]

const createDefaultStructure = (root) => {
  let source = path.resolve(__dirname, '../template');
  let destination = path.resolve(process.cwd(), `./${root}`);

  console.info(process.cwd());
  console.info(chalk.yellow(`Source: ${source}`));
  console.info(chalk.yellow(`Destination: ${destination}`));
  
  shell.mkdir(destination);
  shell.cp('-r', `${source}/*`, `${destination}`);
}

const setup = () => {
  prompt(questions).then((answers) => {
    const {
      root
    } = answers;

    if (root) {
      createDefaultStructure(root);
    } else {
      createDefaultStructure('src');
    }
  })
}

module.exports = setup
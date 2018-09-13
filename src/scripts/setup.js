const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const {prompt} = require('inquirer');

const createDefaultStructure = () => {
  let source = path.resolve(__dirname, '../template');
  let destination = process.cwd();
  console.info('Copying files to ' + chalk.yellow(`Destination: ${destination}`));
  shell.cp('-rn', `${source}/*`, `${destination}`);
}

const setup = () => {
  createDefaultStructure();
}

module.exports = setup
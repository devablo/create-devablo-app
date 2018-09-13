#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');
const generate = require('./scripts/generate');
const setup = require('./scripts/setup');

program
    .version(packageJson.version)
    .description('A CLI for project setup and setting up react-redux app');

program
    .command('setup')
    .alias('s')
    .description('Creates default folder structure')
    .action(() => {
      setup()
    })

program
    .command('generate')
    .alias('g')
    .description('Generates a new redux module, page, container or component folder with <name>.js and <name>.test.js')
    .action(() => {
      generate()
    });

var currentNodeVersion = process.versions.node;
// var semver = currentNodeVersion.split('.');
// var major = semver[0];

console.log(`Node Version: ` + chalk.white.bgGreen(currentNodeVersion))

if (!process.argv.slice(2).length) {
    program.help()
}

program.parse(process.argv);
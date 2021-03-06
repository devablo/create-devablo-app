const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const setup = require('./setup');
const fs = require('fs');

const webReact = async () => {

  // Run our main setup
  await setup();

  let source = path.resolve(__dirname, '../web-react');
  let destination = process.cwd();

  console.info(chalk.yellow(`Copying files to Destination: ${destination}`));
  shell.cp('-rn', `${source}/*`, `${destination}`);

  // hidden file workaround .babelrc
  shell.cp('-rn', `${source}/.*`, `${destination}`);

  // Better README doc
  shell.cp('-rf', `${source}/README.md`, `${destination}`);

  console.info(chalk.yellow('Running npm install... '));

  let reactNpm = 'npm install react@16.5.2 react-dom@16.5.2';
  let webpackNpm = 'npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2';
  let babelNpm = 'npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0 babel-plugin-transform-object-rest-spread';
  let expressNpm = 'npm install express@4.16.3';
  let toolingNpm = 'npm install --save-dev nodemon@1.18.4';

  console.info(chalk.yellow(reactNpm));
  shell.exec(reactNpm);
  console.info(chalk.yellow(webpackNpm));
  shell.exec(webpackNpm);
  console.info(chalk.yellow(babelNpm));
  shell.exec(babelNpm);
  console.info(chalk.yellow(toolingNpm));
  shell.exec(toolingNpm);
  console.info(chalk.yellow(expressNpm));
  shell.exec(expressNpm);

  // Update package.json
  console.info(chalk.yellow("Updating package.json start script"));

  let root = process.cwd();
  let packageJsonFile = path.join(root, 'package.json');

  let rawdata = fs.readFileSync(packageJsonFile);  
  let packageJson = JSON.parse(rawdata);

  packageJson.scripts.local = "webpack-dev-server --mode development --open";
  packageJson.scripts.watch = "webpack --watch";
  packageJson.scripts.build = "webpack -p";
  packageJson.scripts.debug = "node --nolazy --inspect-brk=9229 ./src/server.js";
  packageJson.scripts.dev = "npm run-script watch | nodemon ./src/server.js";
  packageJson.scripts.start = "npm run-script build | node ./src/server.js";

  fs.writeFileSync(
    packageJsonFile,
    JSON.stringify(packageJson, null, 2)
  );
}

module.exports = webReact
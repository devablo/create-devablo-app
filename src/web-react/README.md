# Your Project

## Overview
Project runs a node server and is setup using react, babel, webpack. For local development this uses webpack dev server for client side but also setup for development with nodemon for server changes and webpack watch for client.

## Structure

```
|-- dist `for webpack output and reference in website`
|-- docs
|   |-- Dependencies.md
|   |-- InitialSetup.md
|   |-- MarkdownCheatsheet.md
|-- public
|   |-- index.html
|-- src
|   |-- index.js
|   |-- server.js
|-- .babelrc
|-- package-lock.json
|-- package.json
|-- README.md
|-- webpack.config.js
```

## Running

### Development

Local Development using webpack, nodemon for watching changes.

```sh
npm run-script dev
```
Open http://localhost:4000/

### Debug

```sh
npm run-script debug
```

### Production

```sh
npm start
```

## Issues

If you are getting an issue running the application, a common problem is the port is already in use which is `4000`

Using bash

``` sh
lsof -ti:4000 | xargs kill
```
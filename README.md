# create-devablo-app

## Overview
Basic structure & scaffolding for common JavaScript projects.

## Structure

```
|-- docs
|   |-- Dependencies.md
|   |-- InitialSetup.md
|   |-- MarkdownCheatsheet.md
|-- src
|   |-- scripts
|   |-- template
|   |   |-- build
|   |   |-- docs
|   |   |-- src
|   |-- index.js
|   index.js
|-- package.json
|-- README.md
```

## Install

Package to be global so the CLI runs across projects.

```sh
npm install create-devablo-app -g
```

## Usage

* `create-devablo-app setup` -- Setup for initial folder structures and sample files.
* `create-devablo-app generate | g` -- Starts react-redux scaffolding generator
* `create-devablo-app -h` -- help
# Initial Install & Setup

``` javascript
npm init
touch index.js
```
## index.js

Add shebang to tell our shell how to invoke this script
``` sh
#!/usr/bin/env node
```

## Setup entry point for the bin folder

Add shebang to tell our shell how to invoke this script
``` json
"bin": {
    "snippet": "./index.js"
}
```

## Make a node executable

#### Option 1
``` bash
npm install -g
```
#### Option 2
``` bash
npm link
npm unlink
```
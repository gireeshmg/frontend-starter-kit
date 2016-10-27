# Frontend Starter Kit
Front end starter kit using gulp, es6, handlebars, semantic-ui, less, accessibility, assemble, mocha

## Prerequisites:

* NodeJS
* NPM
* Gulp
* Bower

## Installation of Prerequisites
### NodeJS
Download nodejs from https://nodejs.org/en/download/ and install

### NPM
Included in nodejs package so no installation needed

### Gulp
Run the below command on cmd/terminal
```
npm install --global gulp-cli
```
This will install the gulp client on globally.

### Bower
Run the below command on cmd/terminal
```
npm install -g bower
```
This will install the bower globally.

## Installation Steps:
1. Unzip the file to a folder or clone this.
2. Open terminal/cmd
3. Run “npm install”
This will download all the dependent node modules to a folder “node_modules”
4. Once completed run “bower install”
This command will download the dependent packages to a folder “bower_components”
Once completed run “gulp dev” for development or “gulp” for deployment

## Configurations:
* **package.json**
This file has all the npm dependencies
* **gulp-config.json**
This file contains path configurations for the gulp
* **semantic.json**
This file contains semantic-ui related configurations like components, source and output paths
* **bower.json**
This file has bower dependent file configurations  
* **gulpfile.js**
This is the entry file for the gulp. Main tasks sequence like default and
dev are configured here.
* **/tasks/**
All the gulp tasks are split into multiple files to de-clutter the gulpfile.js

## License:
This project is licensed under the MIT License

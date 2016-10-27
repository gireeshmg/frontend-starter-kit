# Frontend Starter Kit
Front end starter kit using gulp, ES6, handlebars, semantic-ui, less, assemble

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
3. Run “npm install”. This will download all the dependent node modules to a folder “node_modules”.
4. Once completed run “bower install”. This command will download the dependent packages to a folder “bower_components”.


## Usage:
### gulp task:
Run the bellow command to generate files for build purpose.
```
gulp
```

### gulp dev task:
Run the bellow command to generate files for development purpose.
```
gulp dev
```
##### This will handle:
* Initial build tasks
* Opens the index page on a default browser with the URL  http://localhost:3000/
* Start a watch task and watch for any changes made to the template, styles, scripts & images

**Compiled files will be created under the distribution folder "dist"**

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

## Resources:
* [Gulp](http://gulpjs.com/)
* [Bower](https://bower.io/)
* [Assemble](http://google.com)
* [Handlebars](http://handlebarsjs.com/)
* [Semantic UI](http://semantic-ui.com/)



## License:
This project is licensed under the MIT License

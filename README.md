# javascript-development-kit
Pluralsight - Building a JavaScript Development Environment

## [Module 3. Editors and Configuration]
- added `.editorconfig` file to the project

## [Module 4. Package Management]
- node and npm are already installed
- grabbed `package.json` file from [bit.ly/jsdevpackagejson](http://bit.ly/jsdevpackagejson)
- installed node modules
- globally installed Node Security Platform module
  - consider scripting this check into build/deployment (i.e. at npm start?)

## [Module 5. Development Webserver]
- set up Express
- created `srcServer.js` file to run and open our app
- added boilerplate html file in `src` directory
- configure localtunnel for sharing work-in-progress

## [Module 6. Automation]
- reviewed automation options
- set up npm scripts (over grunt or gulp)
  - eliminate dependence on plugin authors
  - easier to debug
  - better docs and easy to learn
- implemented simple start script
- added security check and localtunnel scripts
- set up multiple concurrent tasks
  - `start` triggers node package security check and starts up the webserver/app
  - `share` starts up the webserver/app and opens up localtunnel route for sharing

## [Module 7. Transpiling]
- set up and configured Babel
- set `babel-node` to transpile build scripts
- tweak build scripts for ES6 import syntax

## [Module 8. Bundling]
- reviewed bundler options
- Webpack bundles more than just JS; bundles things like HTML, CSS, images, fonts, etc. as well
- configured Webpack
- configured Express to serve new Webpack bundle
- created an app entry point so we have some actual JavaScript for Webpack to munch on
- handle CSS bundling
- Sourcemaps only download when dev tools request them. Otherwise, they're not served to end-users.

# javascript-development-kit [![aky](https://img.shields.io/badge/👍-fantastic-brightgreen.svg?style=flat-square)](https://cdnjs.com/libraries/jquery)
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

## [Module 9. Linting]
- enforce consistency and avoid mistakes with liniting.✨
- ESLint is the choice for me.👍
- Core decisions for ESLint:
  - config format?
    - multiple options for config file formats (e.g. JavaScript, YAML, JSON, npm package.json, etc).
    - most common approach is to create dedicated `.eslintrc.js` file. This is a universal file and is not tied to npm.
    - adding to `package.json` is easy and simple and avoids creating yet another file in your project.
  - which built-in rules to use?
    - lots of potential errors are caught out-of-the-box but others may be useful. Check ESLint docs for info. [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)
  - use warnings or errors?
    - `warning` warnings don't break the build; you can continue development without actually fixing the issue.
    - `error` errors break the build; development stops until the issue is resolved.
    - --------
    - `warning` warnings may be ignored but could ultimately get committed... not cool.👎
    - `error` errors are a clear wall to moving forward and cannot be ignored.
    - --------
    - recommendation: use both. use warnings for any minor stylistic issues; use errors for items that are likely to produce bugs.
  - which plug-ins to use (if any)?
    - [https://github.com/dustinspecker/awesome-eslint](https://github.com/dustinspecker/awesome-eslint)
  - just use presets?
    - ESLint standard rules are a good shortcut for getting started. Tweak settings based on needs and team feedback.
    - Teams like XO, Airbnb, or standardJS.
- ESLint doesn't watch files; have to run via command line. Alternatively, use something like eslint-loader or eslint-watch: eslint-loader runs every time we run our build. eslint-watch adds file watch capability.
  - eslint-watch: not tied to Webpack, better warning/error formatting, displays clean messages, easily lint tests and build scripts.

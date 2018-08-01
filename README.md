# javascript-development-kit [![fantastic](https://img.shields.io/badge/👍-fantastic-brightgreen.svg?style=flat-square)](https://adamyagiz.com)
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

## [Module 10. Testing and Continuous Integration]
- Testing Styles: 
  - Unit - testing a single function or module, in isolation. Assert that a function will return an expected value when passed certain parameters.
  - Integration - Test interactions between modules in a project.
  - UI - Automate interactions with the UI.
- 6 key testing decisions:
  - Framework
    - Mocha - highly configurable; large ecosystem of support; no built-in assertion library
    - Jasmine - as popular as Mocha; includes built-in assertion library
    - Tape - lean and simple configuration
    - QUnit - oldest; created by jQuery creators
    - AVA - newer; runs tests in parallel and only reruns impacted/failed tests to speed results
    - Jest - from Facebook; popular with React developers; essentially a wrapper over Jasmine
  - Assertion Library
    - since we will use Mocha, we'll also use Chai for assertion testing
  - Helper libraries
    - JSDOM - simulate the browser DOM in node; run DOM-related tests without a browser
    - Cheerio - jQuery for the server; query virtual DOM using jQuery selectors
  - WHERE to run 
    - Browser? - Karma, Testem are popular test runners for running in an actual browser; requires more config and resources.
    - Headless browser? - PhantomJS (no visible UI)
    - In-memory DOM? - JSDOM simulates an actual browser; lighter weight alternative to PhantomJS because there isn't a full browser behind the scenes.
  - WHERE to place tests
    - Centralized? - all tests in a "tests" folder? creates clutter??
    - Along side? - easy imports; clear visibility; easy to find/open; no folder structure
  - WHEN to run tests
    - UNIT tests should run every time you save!💾
      - Results in rapid feedback
      - Facilitates test-driven-development
      - Automatic = low friction
      - Increases test visibility
    - INTEGRATION tests should be run separately
- Reviewed continuous integration (CI) considerations
- Configured Travis CI (Linux-based) and Appveyor (Windows-based)

## [Module 11. HTTP Calls]
- HTTP Call Approaches:
  - Node: http, request
  - Browser: XMLHttpRequest (XHR), jQuery, framework-based (Angular, etc.), Fetch (requires polyfills for some browsers)
  - Node & Browser: isomorphic-fetch, xhr SuperAgent, Axios
- Centralize API calls
  - One place to congifure all API calls
  - Handle preloader logic (and visuals like spinners)
  - Handle errors efficiently
  - Single seam for mocking - point to mock API instead of the real one with a single line change
- Set up Fetch
- Set up dummy API for mocking
- Set up mock HTTP
  - Nock: hijacks http request to specified url and return what you specify instead.
  - Static JSON
  - Create DEV webserver
    - api-mock
    - JSON server - fake db that actually updates json file to feel like the real things
    - JSON schema faker - generate dynamic fake data (string, boolean, etc)
    - Browsersync, Express, etc. - more work
  1. Declare shchema
    - JSON schema faker ([http://json-schema-faker.js.org](http://json-schema-faker.js.org))
  2. Generate random data
    - faker.js ([https://github.com/Marak/faker.js/wiki](https://github.com/Marak/faker.js/wiki))
    - chance.js
    - randexp.js
    - (all 3 libs come bundled in JSON Schema Faker)
  3. Serve data via API
    - JSON server ([https://github.com/typicode/json-server](https://github.com/typicode/json-server))

## [Module 12. Project Structure]
- Why include a demo app in the dev team starter kit?
  - Many people learn by example.
  - Demo app can provide guidance on directory structure and file naming, framework usage, testing, mock APIs, automadtes deployments, codifies desicions.
  - Provides an interactive example of the starter kit working in a realistic scenario.
- Structure Tips:
  - Put JavaScript in a `.js` file! Resist the urge to shim in `<script>` tags.
  - For larger projects, consider organizing by feature rather than by file type. For example:

    Organized by File Type (files that serve the same purpose are stored together; i.e. MVC frameworks):
    ```
    /components
    /data
    /models
    /views
     ```
    v...

    ✅ Organized by Feature (keeps feature-related files together in the dir structure):
    ```
    /authors
    /courses
    ...
     ```
  - Extract logic into "POJOs" => Plain Old JavaScript Objects
    - POJOs contain pure logic; no framework-specific code. (See [React Slingshot](https://github.com/coryhouse/react-slingshot). Even though it's a React project, the `utils` folder continas POJO logic files.)

## [Module 13. Production Build]
- Minification (to speed page loads)
  - How does minification work?
    - Shortens variable and function names
    - Removes comments
    - Removes whitespace and new lines
    - With help of bundlers, eliminate dead code, tree-shaking, etc.
    - Debug via sourcemap
  - Set up minification
    - created webpack production config and build script
    - configured up distServer.js to handle our /dist files
- Sourcemaps (generated to support debugging in production... it's gonna happen!)
  - Toggle mock API
    - modified baseUrl.js to accept and handle `useMockApi` query string
    - Set up production build npm scripts
- Dynamic HTML
  - Why manipulate HTML for production?
    - Reference bundles automatically
    - Handle dynamic bundle names (for caching)
    - Inject production-only resources
    - Minify to save bandwidth
  - Referencing bundled assets in HTML:
    - Hard code 
    - Manipulate via node
    - ✅ html-webpack-plugin (via templating)
- Cache busting (ensure users get the latest version of our code upon deployment)
  - Set content headers to save http requests
  - Force request for the latest version
  - Set up:
    - Hash the bundle file name
    - Generate html dynamically
    - Split out CSS 
- Bundle splitting (prevents users from having to get the whole app when only part of it changes)
  - Splitting JS into bundles helps speed initial page loads
  - Avoid making users fetch code that isn't used on the particular pages/sections.
- Error logging (for figuring out when bugs sneak their way into production)
  - What to look for with an error logger:
    - Error metadata: what browser? stack trace? previous actions? custom API for advanced data?
    - Notifications and integration: e.g. emails or Slack notifications?
    - Analytics and filtering: aggregating errors together, filtering list or setting rules for when notifications occur
    - Price?
  - Error tracking via Track.js (30-day free trial...👎)
  - Adding conditional logic to HTML via HTML templating in html-webpack-plugin
    - configure EJS templating in production build

## [Module 14. Production Deployment]
- Separating UI and API. Why?
  - Allows for simple, low-risk, UI-only deploys (i.e. only upload static files from `dist` folder to your web server)
  - Allows for separate concerns...
    - Separate teams for front- and back-end can work without stepping on each others toes
    - Less for a single developer to understand; share the load
    - Can scale the back-end separately
  - Cheap UI hosting for static HTML, CSS, and JavaScript 
  - Serve static front-end UI files from a CDN
  - Use the API tech you like (JavaScript, Java, ruby, etc.)
- Automated Deployment
  - Cloud hosting options abound: AWS, MS Azure, Heroku, Firebase, Google Cloud Platform, Netlify, GitHub Pages, Surge, and so on... (Netlify, GitHub Pages, Surge only serve static files)
  - For demo: Heroku for API, Surge for UI
    - Set up heroku api workflow
    - Set up surge workflow for static UI files
    - Path to Production: `npm start` => `npm run build` => `npm run deploy`
- Keeping dev starter kit updated
  - Yeoman scaffold
  - GitHub repository
  - npm package
- Challenge:
  - Meet with the team
    - Would we benefit from a starter kit?
    - What are our JS pain points? Testing? Deployment? Coding styles?
    - Would we benefit from a demo app?

### Notes:
- This is a change on dev...
- This should affect the PR...

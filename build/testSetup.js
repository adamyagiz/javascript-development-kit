// This file isn't transpiled so must use CommonJS and ES5

// Register babel to transpile oru tests before Mocha runs our tests
require('babel-register')();

// Disable webpack features that Mocha doesn't understand (e.g. import './styles.css' in index.js)
require.extensions['.css'] = function() {};

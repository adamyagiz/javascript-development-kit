// This file isn't transpiled so must use CommonJS and ES5

// Register babel to transpile our tests before Mocha runs our tests
require('babel-register')({
	cache: true
});

// Disable webpack features that Mocha doesn't understand (e.g. import './styles.css' in index.js)
require.extensions['.css'] = function() {};

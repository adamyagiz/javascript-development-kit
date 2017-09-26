'use strict';

/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment or two...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) { // stop here on fatal errors
    console.log(chalk.red(err));
    return 1;
  }

  // The following code ensures warnings, errors, and stats are displayed in the console
  const jsonStats = stats.toJson();

  // prints any errors that occur
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  // prints any warnings that occur
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  // print webpack stats
  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded!
  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0;
});

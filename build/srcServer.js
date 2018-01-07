import express from 'express'; // ES6 module format
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// file-wide disabling of eslint rule
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1,"firstName": "Bob","lastName": "Smith","email": "itsbob@gmail.com"},
    {"id": 2,"firstName": "Sue","lastName": "Jenkins","email": "itssue@yahoo.com"},
    {"id": 3,"firstName": "Tim","lastName": "Washington","email": "itstim@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log('App running on port ' + port);
  }
});

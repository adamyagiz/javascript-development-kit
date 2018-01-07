import express from 'express'; // ES6 module format
import path from 'path';
import open from 'open';
import compression from 'compression';

// file-wide disabling of eslint rule
/* eslint-disable no-console */

const port = 3000;
const app = express();

// useful for hosting minified prod build for local debugging. NOT for actual production!
app.use(compression());
// tell express to serve static files from /dist directory
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log('App running on port ' + port);
  }
});

'use strict';

import {expect} from 'chai'; // using the "expect" style that comes with Chai
import jsdom from 'jsdom';
import fs from 'fs';

// dummy test
describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// check the inner html of the h1 tag for specific value
describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello, world!');
      done();
      window.close();
    });
  });
})

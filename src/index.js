'use strict';

import './normalize.min.css';
import './styles.css';

import numeral from 'numeral'; // ES6 module format

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would gladly pay ${courseValue} for this awesome course!`);

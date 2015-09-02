'use strict';

// idea from https://github.com/ljharb/eslint-config/blob/master/index.js

// ----- dependencies
// ---------------------------------------
var fs = require('fs');
var path = require('path');

// ----- exports
// ---------------------------------------
module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, '.eslintrc')));
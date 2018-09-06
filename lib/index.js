'use strict';

const jsonify = require('./jsonify');
const toBuffer = require('./toBuffer');
const bufferOrString = require('./bufferOrString');
const timer = require('./timer');

module.exports = {
    bufferOrString,
    toBuffer,
    jsonify,
    timer    
}


'use strict';

const verify = require('./tokenValidator');
const generate = require('./tokenGenerator');
const decode = require('./tokenDecoder');

module.exports = {
    generate,
    verify,
    decode
}



'use strict';

const Buffer = require('safe-buffer').Buffer;

module.exports = thing => {
   
    if(Buffer.isBuffer(thing) || typeof thing === 'string')
        return true;
    
    return false
}
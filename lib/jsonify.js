'use strict';

const Buffer = require('safe-buffer').Buffer;

module.exports = obj => {

  if (typeof obj === 'string')
    return obj;
    
  if (typeof obj === 'number' || Buffer.isBuffer(obj))
    return obj.toString();

  return JSON.parse(JSON.stringify(obj));
  
};
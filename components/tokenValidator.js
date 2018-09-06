'use strict';

const _isPlainObject = require('lodash/isPlainObject');
const _isEmpty = require('lodash/isEmpty');
const decode = require('./tokenDecoder');
const { timer } = require('../lib');

module.exports = (token, secret) => {
   
    const payload = 'payload';
    const expIn = 'expIn'; 

    const data = decode(token, secret);
  
    
    if(data !== null){  

        if(!_isPlainObject(data)) return false;

        if(Object.keys(data).length > 2) return false
        
        if(data[payload] === undefined || data[expIn] === undefined) return false;

        if(_isEmpty(data[payload])) return false;

        if(typeof data[expIn] !== 'number') return false;
       
        if(!timer.verify(data[expIn]))return false;
   
        return data;
        
    }

    return false
       
}



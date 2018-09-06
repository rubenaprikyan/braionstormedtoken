'use strict';

const Buffer = require('safe-buffer').Buffer;
const crypto = require('crypto');

const { bufferOrString, toBuffer, timer } = require('../lib');

function generateToken(payload, expIn, secret){
        
    expIn = timer.normalize(expIn)
    let data = toBuffer({
        payload,
        expIn
    });
    let token;

    try{
       
        const cipher = crypto.createCipher('AES-128-CBC', secret);
        token = cipher.update(data, 'utf8', 'hex');
        token += cipher.final('hex');
    }
    catch(e) { 
        return 
    }
    return token
}

module.exports = (payload,secretKey,expIn = "100d") => {
      
    var isObjectPayload = typeof payload === 'object' &&
                        !Buffer.isBuffer(payload);
      
    if (!secretKey) {
        return new Error('secretKey REQUIRED');
    }
      
    if (!isObjectPayload) 
        return new TypeError('payload must be an object or Buffer');
        

    if(!(bufferOrString(secretKey))){
        return new TypeError('"secret" nust be buffer or string')
    }

    return  generateToken(payload, expIn, secretKey)
        
}



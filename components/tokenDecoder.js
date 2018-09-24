'use strict'

const crypto = require('crypto');
const { jsonify } = require('../lib');

function decode(sign, secret){
   
  let data;
  try{

    const decipher = crypto.createDecipher('AES-128-CBC',secret);

    data = decipher.update(sign,'hex','utf8')
    data += decipher.final('utf8')   
    
  }
  catch(e){
    
    return null
  }  
  
  return data;

}

module.exports =  (data, secret) => {

  const token = decode(data, secret);
  
  return JSON.parse(jsonify(token));

}

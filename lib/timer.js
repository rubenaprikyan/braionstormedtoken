'use strict';

const ms = require('ms');

// normalize expIn  to valid format 
module.exports.normalize = expIn => {

    if(typeof expIn !== 'number'){
      if(typeof expIn === 'string'){
        return Math.floor((Date.now() + ms(expIn))/1000);
      }else return
    }
    return Math.floor((Date.now() + expIn)/1000)
  
};

//it checks if time at the moment is valid or not
module.exports.verify = (expIn) => {
  
    const now = Date.now();
    
    return (expIn*1000 - now < 0) ? false : true;

}
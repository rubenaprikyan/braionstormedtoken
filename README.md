## Installation


```
$ npm install brainstormedauth
```

### Usage

This package provides 3 functions.</br>
__generate(payload:Object || Buffer, secretKey:String, expIn:Number||String)__
```js
const {generate, verify, decode} = require('brainstormedtoken');

const token = generate(payload, secretKey, expIn)
/*the expIn argument accepts number & string values; as a string the following values are being supported: 
    1ms - 1 millisecund,
    1s - 1 second,
    1m - 1 minute,
    1h - 1 hour,
    1d - 1 day,
    1w - 1 week,
    1mo - 1 mounth,
    1y - 1 year
as number must be use as millisecond for example (6000 => 6 second)  
by default value this argument is 100 day  
the secretKey argument  must be 256 bit string as secret key for token encryption    

Payload parameter must be plain object as general data */

```
__verify(token:String, secretKey:String)__
</br>
```js
const vrf = verify(token, secret);

/*return decryptied token with json format or false if decryption is faild (invalid secret, invalit token and so on...) */ 
```
__verify(token:String, secretKey:String)__
```js
const dec = decode(token, secret);

/*return decoded token with json format or null if decryption is faild */ 

```
## Note
**This tocken is not convenient to use, as it has some troubles concerning to encryption; symmetric encryption is happening**


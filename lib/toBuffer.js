'use strict';

const Buffer = require('safe-buffer').Buffer;

module.exports = val => {
	
	if (Buffer.isBuffer(val)) {
		return val;
	}

	if (typeof val === 'string') {
		return Buffer.from(val, 'utf8');
	}

	if (typeof val === 'number') {
		// This won't work for very large or very small numbers
		val = val.toString();
		return Buffer.from(val, 'utf8');
	}

	return Buffer.from(JSON.stringify(val), 'utf8');
};
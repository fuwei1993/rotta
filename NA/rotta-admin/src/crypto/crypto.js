const crypto = require('crypto');

export default {
	aesEncrypt: function(data, key) {
	    const cipher = crypto.createCipher('aes192', key);
	    var crypted = cipher.update(data, 'utf8', 'hex');
	    crypted += cipher.final('hex');
	    return crypted;
	}, // 加密
 	aesDecrypt: function(encrypted, key) {
	    const decipher = crypto.createDecipher('aes192', key);
	    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
	    decrypted += decipher.final('utf8');
	    return decrypted;
	} // 解密
}


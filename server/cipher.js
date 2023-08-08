const crypto = require('crypto');

/**
 * Generate a random 32-byte salt buffer
 * @returns A 32-byte salt array for
 * the encryption/decryption algorithm
 */
function generateSalt() {
  return crypto.randomBytes(32);
}

/**
 * Generate a unique hash ID
 * @param {*} uniqueID 
 * @returns 
 */
function hashUniqueID(uniqueID) {
  const hashedID = crypto.createHash('sha256').update(uniqueID).digest('hex');
  return Buffer.from(hashedID, 'hex');
}

function encryptData(data, uniqueID) {
  const salt = generateSalt();
  const hashedKey = hashUniqueID(uniqueID);

  const cipher = crypto.createCipheriv('aes-256-gcm', hashedKey, salt);

  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const tag = cipher.getAuthTag();

  return {
    salt: salt.toString('hex'),
    encryptedData: encrypted.toString('hex'),
    tag: tag.toString('hex'),
  };
}

function decryptData(encryptedDataObj, uniqueID) {
  const { salt, encryptedData, tag } = encryptedDataObj;
  const hashedKey = hashUniqueID(uniqueID);
  const decipher = crypto.createDecipheriv('aes-256-gcm', hashedKey, Buffer.from(salt, 'hex'));

  decipher.setAuthTag(Buffer.from(tag, 'hex'));

  let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = {
    encryptData,
    decryptData
}

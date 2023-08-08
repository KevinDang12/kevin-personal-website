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
 * @param {*} uniqueID The unique ID to hash
 * @returns A buffer containing the hashed ID
 */
function hashUniqueID(uniqueID) {
  const hashedID = crypto.createHash('sha256').update(uniqueID).digest('hex');
  return Buffer.from(hashedID, 'hex');
}

/**
 * Encrypt the data using the unique ID
 * @param {*} data The data to encrypt
 * @param {*} uniqueID The unique ID to encrypt the data with
 * @returns An object containing the salt, encrypted data, and tag
 */
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

/**
 * Decrypt the data using the unique ID
 * @param {*} encryptedDataObj The encrypted data object
 * @param {*} uniqueID The unique ID to decrypt the data with
 * @returns The decrypted data
 */
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

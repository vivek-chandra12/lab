const crypto = require("crypto"); 
const prompt=require("prompt-sync")() 
const algorithm = "aes-256-cbc"; 
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16); 
//Function to encrypt text 
const encrypt = (text) => { 
  let cipher = crypto.createCipheriv(algorithm, key, iv); 
  let encrypted = cipher.update(text, "utf8", "hex"); 
  let encrypted2=encrypted+cipher.final("hex"); 
  return encrypted2; 
}; 
//Function to decrypt text 
const decrypt = (encryptedText) => { 
  let decipher = crypto.createDecipheriv(algorithm, key, iv); 
  let decrypted = decipher.update(encryptedText, "hex", "utf8") 
  let decrypted2=decrypted+decipher.final("utf-8") 
  return decrypted2; 
}; 
 
let plaintext = prompt("Enter some text:"); 
let ciphertext = encrypt(plaintext); 
console.log("Given Plaintext:", plaintext); 
console.log("Generated Ciphertext:", ciphertext); 
 
 
console.log("Decrypted Text:", decrypt(ciphertext));
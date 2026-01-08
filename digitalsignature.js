const prompt=require("prompt-sync")() 
const { generateKeyPairSync, createSign, createVerify } = 
require("crypto"); 
// Generate RSA keys 
const { publicKey, privateKey } = generateKeyPairSync("rsa", 
{ 
  modulusLength: 2048, 
}); 
 
// Read Message from keyboard 
let msg = prompt("Enter a message:"); 
// Sign with private key 
const sign = createSign("SHA256"); 
sign.update(msg); 
sign.end(); 
const signature = sign.sign(privateKey, "hex"); 
console.log("Digital Signature created for the message:"+msg) 
// Verify with public key 
msg = prompt("Enter message to verify:"); 
const verify = createVerify("SHA256"); 
verify.update(msg); 
verify.end(); 
console.log("Signature Verified:", verify.verify(publicKey, 
signature, "hex"));
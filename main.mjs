import Encryption from "./encryption.mjs";

const encryption = new Encryption();

const text = "Hello World";

const encrypted = encryption.encrypt(text);

console.log(encrypted);

const decrypted = encryption.decrypt(encrypted);

console.log(decrypted);
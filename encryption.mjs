import * as crypto from "crypto";

class Encryption {
    constructor() {
        this.algorithm = "aes-256-ctr";
        this.secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
    }
    encrypt (text) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        return iv.toString("hex") + ":" + encrypted.toString("hex");
    }

    decrypt (text){
        const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, Buffer.from(text.split(":")[0], "hex"));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(text.split(":")[1], "hex")), decipher.final()]);
        return decrpyted.toString();
    }
}

export default Encryption;


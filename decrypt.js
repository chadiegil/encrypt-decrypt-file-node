const fs = require("fs");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const password = "my-password";

function decryptFile(inputFile, outputFile) {
  const readStream = fs.createReadStream(inputFile);
  const writeStream = fs.createWriteStream(outputFile);
  const decipher = crypto.createDecipher(algorithm, password);

  readStream
    .pipe(decipher)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Decryption completed");
    });
}

decryptFile("output.txt.enc", "output.txt");

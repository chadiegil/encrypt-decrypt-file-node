const fs = require("fs");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const password = "my-password";

function encryptFile(inputFile, outputFile) {
  const readStream = fs.createReadStream(inputFile);
  const writeStream = fs.createWriteStream(outputFile);
  const cipher = crypto.createCipher(algorithm, password);

  readStream
    .pipe(cipher)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Encryption completed");
    });
}

encryptFile("input.txt", "output.txt.enc");

var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('../zipfile/file1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('../zipfile/file2.txt','utf-8'));
  
console.log("File Decompressed.");
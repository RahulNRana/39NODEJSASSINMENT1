var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('../zipfile/file1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('../zipfile/file1.txt.gz'));
  
console.log("File Compressed.");
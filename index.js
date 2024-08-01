// const http = require('http');
const fs = require('fs');

// Importing the path module in node js
const path = require('path');


// http.createServer((req,rest) => {
//     console.log("request handle");
// }).listen(3000);
// console.log("Server is running");


let data = "This is a file containing a collection of books.";
 
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});


// file path of the markdown from your system
const path1 = path.extname("index.js");
console.log(path1)
   
// file path of the text from your system
const path2 = path.extname("books.txt");
console.log(path2)

// File with blank extension hence return only the period (.)
const path3 = path.extname("example.")
console.log(path3)

// File with no extension hence returns an empty string
const path4 = path.extname("fileDump")
console.log(path4)
   
// File with two periods only return from the last occurence
const path5 = path.extname("readme.md.txt")
console.log(path5)
   
// Extension name of the current script
const path6 = path.extname(__filename)
console.log(path6)
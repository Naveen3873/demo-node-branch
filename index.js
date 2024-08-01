const http = require('http');

http.createServer((req,rest) => {
    console.log("request handle");
}).listen(3000);
console.log("Server is running");
"use strict";
const http = require("http");
const fs = require("fs");


// EventEmitter
const server = http.createServer();

server.on("request", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end("<h1>hello node.js http API</h1>");
    fs.readFile("me.html", (err, data) => {
        res.end(data);
    });
    // fs
    if (req.method == "POST") {
        let writeStream = fs.createWriteStream("me.txt");
        req.pipe(writeStream);
    }

})

server.on("request", (req, res) => {
    console.log(".....");
})
server.listen(3000);
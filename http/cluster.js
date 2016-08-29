const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) { // 如果是主进程
    // Fork workers.
    console.log("我是主进程");
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server

    console.log("我是子进程");
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);
}
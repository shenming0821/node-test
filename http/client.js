'use strict';
const http = require('http');

http.get({
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    agent: false  // create a new agent just for this one request
}, (res) => {
    // Do stuff with response
    // read stream
    res.on("readable",function(){
        let buffer = res.read();

        const bufList = [];
        if (buffer) {
            bufList.push(buffer);
        } else {
            let result = Buffer.concat(bufList);
            console.log(result.toString());
        }
    })
})

//res 响应对象，异步的
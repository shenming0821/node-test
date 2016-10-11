'use strict';

var http = require('http');
var url = require('url');
var actionRepos = {};
var session = require("./session");

//
actionRepos['/add'] = require('./actions/add');
actionRepos['/del'] = require('./actions/del');
actionRepos['/update'] = require('./actions/update');
actionRepos['/'] = require('./actions/index');
actionRepos['/login'] = require('./actions/login');
actionRepos['/logout'] = require('./actions/logout');
actionRepos['/vnum'] = require('./actions/vnum');

http.createServer(function (request, response) {
    request.session  =  session(request,response);
    response.writeHead('Content-Type','text/html');
    let pathname = url.parse(request.url).pathname;
    var action = actionRepos[pathname];
    if(action){
        action(request, response);
    }else{
        response.statusCode = 404;
        response.end();
    }
}).listen(3000);

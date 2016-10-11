'use strict'
const qs = require('querystring')
const url = require('url')

module.exports = function query(req) {
    let query = url.parse(req.url).query
    console.log(query);
    console.log(qs.parse(query));
    return qs.parse(query)
}
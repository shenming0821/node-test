'use strict'
const qs = require('querystring')
module.exports = function (req) {

  return new Promise((resolve, reject) => {
    let result = ''
    let jsonObj
    req.on('data', (chunck) => {
      result += chunck
    })

    req.on('end', () => {
      // result:title=123&body=123123
      // jsonObj[object Object]
      jsonObj = qs.parse(result)
      resolve(jsonObj)
    })
  })

}
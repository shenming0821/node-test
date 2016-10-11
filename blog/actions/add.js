'use strict'
const database = require('../database')
const Addpager = require('../views/AddPager')
// 对请求的内容进行解析，把内容变成json对象
// const querystring = require('querystring')
const post = require('./post')
const IndexPager = require('../views/AbstractPager')

module.exports = (req, res) => {
  if (req.method === "GET") {
    res.end(new Addpager().render())
  } else {
    post(req).then(data => {
      let errors = {}
      if(!data.title && data.title.length >= 5){
        errors.title = 'title char length >= 5'
      }

      if(!(data.body && data.body.length >= 10)){
        errors.body = 'body char length >= 10'
        // console.log(errors)
      }
      
      if(Object.keys(errors).length){
        res.end(new Addpager(errors).render())
      }else{
        database.add(data)
        res.end(new IndexPager(database.list).render())
      }
    })
  }
}
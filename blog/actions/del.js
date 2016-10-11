'use strict'

const database = require('../database')
const getId = require('./getId')
const indexAction = require('./index')

module.exports = function del(req, res) {
  getId(req,id=>{
    database.del(id)
    indexAction(req,res)
  })
}
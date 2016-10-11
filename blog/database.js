'use strict';
var fs = require('fs')
const filepath = __dirname + '/data.json'

var list = []

try {
  list = JSON.parse(fs.readFileSync(filepath))
} catch (e) {
  list = []
}


module.exports = {
  add(article) {
    list.push(article)
  },
  del(index) {
    list.splice(index, 1)
  },
  update(index, newArticle) {
    list.splice(index, 1, newArticle)
  },
  get list() {
    return list
  },
  // 持久化
  store(callback) {
    fs.writeFile(filepath, JSON.stringify(list), callback)
  }
}
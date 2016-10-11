var IndexPager = require('../views/indexPage')
var database = require('../database')

module.exports = function (req, res) {
  res.end(new IndexPager(database.list).render())
}
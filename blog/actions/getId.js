const query = require('./query')
const post = require('./post')

module.exports = function getId(req, callback) {
  if (req.method === 'GET') {
    let data = query(req)
    callback(data.id)
  } else {
    post(req).then((data) => {
      callback(data.id)
    })
  }
}
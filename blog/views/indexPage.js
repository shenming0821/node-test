'use strict'
const AbstractPager = require('./AbstractPager')

class IndexPager extends AbstractPager{
  constructor(articleList) {
    super()
    this.list = articleList;
  }

  _render() {
    
      let listDOMString = this.list.map( article => `<li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p></li>`).join('')

      return (
        `
          <ul class="list-group">
            ${listDOMString}
          </ul>
        `
      )
  }
}

module.exports = IndexPager


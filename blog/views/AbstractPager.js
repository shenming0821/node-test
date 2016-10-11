'use strict'

class AbstractPager {
  constructor() {
  }

  _render() {
    throw new Error('子类必须实现')
  }

  render() {
    return (
      `
        <!DOCTYPE html>
        <html>
          <meta charset="utf-8" />
          <header>
            <link href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
          </header>
          <body class="container">
            ${this._render()}
          </body>
        </html>
      `
    )
  }
}

module.exports = AbstractPager
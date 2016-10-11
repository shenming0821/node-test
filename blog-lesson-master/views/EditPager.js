'use strict';

var AbstractPager = require('./AbstractPager');

class EditPager extends AbstractPager{

    constructor(id,article,errors,isLogined){
        super(isLogined);
        this.id = id;
        this.article = article;
        this.errors = errors;
    }

    _render(){

        let time = Date.now();

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';
        let vnumError = this.errors.vnum || '';

        return `
<form action="/update" method="post">
<input type="hidden" name="id" value="${this.id}" />
  <div class="form-group">
    <label for="title">标题</label>

    <input type="text" value="${this.article.title}" class="form-control" name="title" id="title" placeholder="标题">
    <p>${titleError}</p>
  </div>
  <div class="form-group">
    <label for="body">内容</label>
    <textarea class="form-control"  name="body" id="body" placeholder="内容">${this.article.body}
    </textarea>
    <p>${bodyError}</p>
  </div>
  <div class="form-group">
    <label for="vnum">验证码 <img src="/vnum?${time}" /> </label>

    <input type="text" class="form-control" name="vnum" id="vnum" placeholder="登录密码 ">
    <p>${vnumError}</p>
  </div>

  <button type="submit" class="btn btn-default">更改</button>
</form>
       `
    }

}

module.exports  = EditPager;
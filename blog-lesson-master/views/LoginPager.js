'use strict';

var AbstractPager = require('./AbstractPager');

class AddPager extends AbstractPager {

    constructor(errors,isLogined) {
        super(isLogined);
        this.errors = errors || '';
    }

    _render() {


        let time = Date.now();

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';

        return `
<form action="/login" method="post">
    <div>${this.errors}</div>
  <div class="form-group">
    <label for="loginname">登录名称</label>

    <input type="text" class="form-control" name="loginname" id="title" placeholder="登录名称 ">
  </div>
   <div class="form-group">
    <label for="password">登录密码</label>

    <input type="text" class="form-control" name="password" id="title" placeholder="登录密码 ">
  </div>
   <div class="form-group">
    <label for="vnum">验证码 <img src="/vnum?${time}" /> </label>

    <input type="text" class="form-control" name="vnum" id="vnum" placeholder="登录密码 ">
  </div>


  <button type="submit" class="btn btn-default">登录</button>
</form>
       `
    }

}

module.exports = AddPager;
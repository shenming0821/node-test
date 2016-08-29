// 事件驱动

const EventEmitter = require("events").EventEmitter;
const util = require("util"); //核心库中的模块,利用此工具中继承的功能

function MyEmitter(){
    EventEmitter.call(this);
}

util.inherits(MyEmitter,EventEmitter); //继承原型  @param (自定义的，要继承的)

// 以上把自身的属性和原型都继承下来

const emitter = new MyEmitter();

emitter.addListener("changeName",function(name){ //定义监听事件 //可监听多次
    console.log('this is listener ',name);
});

emitter.once("changeName",function(name){ //只监听一次
    console.log('this is listener ',name);
});

emitter.emit("changeName","ming"); // trigger 发射器 触发
emitter.emit("changeName","ming");
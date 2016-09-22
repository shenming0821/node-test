
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function (){
  return this.name;
}

var p = new Person();
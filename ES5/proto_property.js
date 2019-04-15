function Dog() {
  this.tail = true;
}
var benji = new Dog();
var rusty = new Dog();

Dog.prototype.say = function () {
  return 'Woof!';
};

benji.say();
rusty.say();

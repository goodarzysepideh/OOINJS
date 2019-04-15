// inheritance helper
function extend(Child, Parent) {
var F = function () {};
F.prototype = Parent.prototype;
Child.prototype = new F();
Child.prototype.constructor = Child;
Child.uber = Parent.prototype;
}

// define -> augment
function Shape() {}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function () {
  return this.constructor.uber
    ? this.constructor.uber.toString() + ', ' + this.name
    : this.name;
};

// define -> inherit -> augment
function TwoDShape() {}
extend(TwoDShape, Shape);
TwoDShape.prototype.name = '2D shape';


// define
function Triangle(side, height) {
this.side = side;
this.height = height;
}
// inherit
extend(Triangle, TwoDShape);
// augment
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
  return this.side * this.height / 2;
};

new Triangle().toString();

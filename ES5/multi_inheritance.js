function multi() {
var n = {}, stuff, j = 0, len = arguments.length;
for (j = 0; j <len; j++) {
stuff = arguments[j];
for (vari in stuff) {
      if (stuff.hasOwnProperty(i)) {
n[i] = stuff[i];
      }
}
}
return n;
}

var shape = {
name: 'Shape',
toString: function () {
return this.name;
}
};

vartwoDee = {
name: '2D shape',
dimensions: 2
};

var triangle = multi(shape, twoDee, {
name: 'Triangle',
getArea: function () {
return this.side * this.height / 2;
},
side: 5,
height: 10
});

triangle.getArea();
triangle.dimensions;
triangle.toString();

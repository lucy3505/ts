function drawShapes(shapes) {
    shapes.forEach(function (shape) { return shape.draw(); });
} //这里S extends Shape 传入的S必须要实现Shape
var a = {
    draw: function () {
        console.log("aa");
    },
};
var b = {
    // draw() {
    //   console.log("bb");
    // },
    bb: 1,
}; //
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("drawing Circle");
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        console.log("drawing Rectangle");
    };
    return Rectangle;
}());
var circle = new Circle();
var rectangle = new Rectangle();
// drawShapes([circle, rectangle, b]);//这里b就不行，但是如果b里面有draw方法也是可以的
drawShapes([circle, rectangle]);
//K keyof T:K 是T的属性
//extends 就是只要表象就行，可以是class也可以是object
function getProp(key, obj) {
    return obj[key];
}
var obj = { a: 2, b: 3 };
var prop = getProp("b", obj);
function getProp2(key, obj) {
    return obj[key];
}
var obj2 = { a: 2, b: 3 };
var prop2 = getProp("b", obj);
console.log("prop2::", prop2);

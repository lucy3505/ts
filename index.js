function drawShapes(shape) {
    shape.draw();
    return shape;
}
var a = { draw: function () { } };
drawShapes(a);
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
var c = drawShapes(circle); //! 这里推导出c的类型是Shape 但我希望是Circle
var c1 = drawShapes(circle); //这里 = 右边推导出的是Shape 我左边给的类型是Circle 我希望右边能给我Circle,这里就要用泛型
function drawShapes1(shape) {
    //Shape1是泛型 现在Shape1泛型可以是任何类型 想要对这个泛型做限制，所以Ts提供extends做限制，extends在这里不是继承，而是约束,只能继承类Shape这种类型的变量，可以扩展Shape属性
    shape.draw();
    return shape;
}
var c2 = drawShapes1(circle);
var c3 = drawShapes1(circle); //! 这里就能推出Circle，Circle是比Shape属性多的

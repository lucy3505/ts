"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes1_1 = require("./classes1");
var a = { draw: function () { } };
(0, classes1_1.drawShapes)(a);
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
var c = (0, classes1_1.drawShapes)(circle);

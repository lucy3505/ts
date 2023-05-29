//tsc --noImplicitThis index.ts  能显示里面this的指向
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.w = w;
        this.h = h;
    }
    Rectangle.prototype.getAreaFunction = function () {
        return function () {
            return this.w * this.h;
        };
    };
    Rectangle.prototype.getAreaFunction2 = function () {
        var _this = this;
        return function () {
            return _this.w * _this.h;
        };
    };
    return Rectangle;
}());
var rectangle = new Rectangle(2, 5);
//返回function
var areaFunction = rectangle.getAreaFunction();
//得到面积
//this 是指向rectangle这个对象，还是调用的上下文
var area = areaFunction();
console.log(area);
var areaFunction2 = rectangle.getAreaFunction2();
//得到面积
//this 是指向rectangle这个对象，还是调用的上下文
var area2 = areaFunction2();
console.log(area2);

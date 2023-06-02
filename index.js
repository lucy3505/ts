var A = /** @class */ (function () {
    function A() {
        this.x = 5;
    }
    return A;
}());
var y; //说明y的取值范围只能是A的属性名
y = "x";
// y = "xa";//这里就会抱错，A没有这个属性
var Test = /** @class */ (function () {
    function Test() {
        this.x = 6;
    }
    return Test;
}());
function getProp(a, test) {
    return test[a];
}
var t = new Test();
var prop = getProp("x", t);
console.log(prop);
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.getAProp = function (a) {
        return a[this.y];
    };
    return B;
}());
var b = new B();
b.y = "x";
var prop1 = b.getAProp(new A());
console.log(prop1);

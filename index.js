var p = {
    age: 27,
    name: "rails",
};
//类不能继承多个类，也就是说不能有多个父亲
//但可以实现多个接口
//每个接口的属性和方法都要实现
var P = /** @class */ (function () {
    function P() {
    }
    return P;
}());
var p1 = {
    name: "rail",
    age: 25,
};
var p2 = p1;
var p3 = p1;
//p2和p3都是看起来像鸭子就可以，p4用这种写法不能有age属性
var p4 = { name: "12", age: 12 };

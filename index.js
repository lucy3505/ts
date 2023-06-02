function createInstance(t) {
    //这里的new是要传个class 可以new的,对构造函数的一个约束
    return new t();
}
var Test = /** @class */ (function () {
    function Test(x) {
        this.x = 4;
        //如果这里用了constructor里面放了参数， 那么new ()=>T 就有问题，因为new ()=>T是没带参数，要带参数就变成new (x:number)=>T
    }
    return Test;
}());
//  let test:Test=new Test()
//! class是可以直接当类型使用let test:Test， 正常声明类型使用type,interface，object,number等
var test = createInstance(Test);
console.log(test);
//!
function createInstance2(t) {
    //这里的new是要传个class 可以new的,对构造函数的一个约束
    return new t();
}
var Obj = { a: 1 };
//  let test:Test=new Test()
var test2 = createInstance(Obj); //
console.log(test);
var test3 = createInstance(Obj); //
console.log(test);
function createInstance3(t) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //这里的new是要传个class 可以new的,对构造函数的一个约束
    return new t(args);
}
var Test3 = /** @class */ (function () {
    function Test3(x) {
        this.x = x;
    }
    return Test3;
}());
// let test

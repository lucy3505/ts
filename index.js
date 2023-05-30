function sayHi() {
    console.log("hi");
}
var a = sayHi();
console.log(a);
function loopForever() {
    //像这种无限循环的，不用 void 用never,永远到达不了这个函数的底部
    //无限循环
    while (true) { }
}
console.log(loopForever());
function terminateWithError($msg) {
    //总是扔出异常也用never
    throw new Error($msg);
}
function checkExhaustiveness(x) {
    throw new Error("exhaustive check fails for: " + x);
}
function showTrueFalse(x) {
    if (typeof x === "string") {
        console.log("string: " + x);
    }
    else if (typeof x === "boolean") {
        console.log("boolean " + x);
    }
    else {
        //传入别的类型，不是string或boolean,编译器会处理
        //x 可能是一个不可到达的类型，可以分配给never
        //当传入错误的类型的时候，可以分配给never类型
        checkExhaustiveness(x);
    }
}
showTrueFalse(true);
showTrueFalse("false");
showTrueFalse([1, 22]);
function showTrueFalse2(x) {
    if (typeof x === "string") {
        console.log("string: " + x);
    }
    else {
        checkExhaustiveness(x); //: Argument of type 'boolean' is not assignable to parameter of type 'never'.
        //这里boolean是可以到达的类型,因为参数里规定可以传 boolean类型
        //可以简单理解为boolean 是可以到达的类型
    }
}
//never 是很多类型的子类型
//不能把number string等类型或值分配给never
var something = null;
var nothing = 12;

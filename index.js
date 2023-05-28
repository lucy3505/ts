function add(a, b) {
    return a + b;
}
// let sum=add("10")//这里报错，对参数个数是有限制的
// console.log(sum)
function add1(a, b) {
    return a + b;
}
var add2 = function (a, b) {
    return a + b;
};
var sum2 = add1(19, 29); //这里对类型进行了限制
var sum3 = add1("19", 29); //这里对类型进行了限制
//返回值
var add3 = function (a, b) {
    return a + b;
};
var sum = add3(1, 2);
console.log(sum.toFixed(2));
var add4 = function (a, b) {
    return a.toString() + b.toString();
};
var sum4 = add4(1, 2);
console.log(sum4.substring(2, 2));
//没有返回值:void
var add5 = function (a, b) {
    console.log(11);
};
//默认值  c=20会自动继承类型number
var add6 = function (a, b, c) {
    if (b === void 0) { b = 10; }
    if (c === void 0) { c = 20; }
    console.log(a + b + c);
};
var sum6 = add6(1);
//可选参数 对于可选参数这种，函数内要注意对这个可选参数的判断
var add7 = function (a, b) {
    if (b) {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
};
var sum7 = add7(1);
//参数不确定，也要保证能正常运行 restParams
var add8 = function (a) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    return num.reduce(function (total, num) {
        return total + num;
    }, a);
};
var sum8 = add8(1, 2, 3, 4, 5);
console.log(sum8);

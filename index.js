var a;
a = 10;
a = "11";
a = [1, 2, 3];
var log = function (value) {
    if (typeof value === "number") {
        return "your number is ".concat(value);
    }
    if (typeof value === "string") {
        return "your name is ".concat(value);
    }
    throw new Error("Expected string or number,got ".concat(value, "."));
};
console.log(log("hfppjj"));
var b;
b = [1, 2, "123", [1, 2, 3]];
//typescript自己进行的判断:作为了解 value is number 是ts自己做的判断
function isNumber(value) {
    //可以进行进一步处理
    //   return typeof value === "number";
    return true;
}
function isString(value) {
    return typeof value === "string";
}
var log2 = function (value) {
    if (isNumber(value)) {
        return "your number is ".concat(value);
    }
    if (isString(value)) {
        return "your name is ".concat(value);
    }
    throw new Error("Expected string or number,got ".concat(value, "."));
};
console.log(log(222));
//union type
var log3 = function (value) {
    if (isNumber(value)) {
        return "your number is ".concat(value);
    }
    if (isString(value)) {
        return "your name is ".concat(value);
    }
    // throw new Error(`Expected string or number,got ${value}.`);
};
console.log(log3(undefined)); //undefined和null 是自己独自的类型

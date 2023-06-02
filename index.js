var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function foo(x, y, z) {
    console.log(x, y, x);
}
var args = [0, 1, 2];
//方法一：
foo.apply(null, args);
foo.apply(void 0, args);
foo.apply(void 0, args);
//1
foo.apply(void 0, args); //类型断言
//2
function foo1() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(JSON.stringify(x));
}
foo1.apply(void 0, args);
function foo2(x, b, c) {
    console.log(x, b);
}
foo2.apply(void 0, args);
foo2(1, 2, 3);
//destructuring 解构
var _a = [1, 2, 3, 4], x = _a[0], y = _a[1], remaining = _a.slice(2);
console.log(x, y, remaining);
//Array Assignment
var list = [1, 2];
list = __spreadArray(__spreadArray([], list, true), [3, 4], false);
console.log(list);
//Object spread
var point2D = { x: 1, y: 2 };
var point3D = __assign(__assign({}, point2D), { z: 3 });
console.log(point3D);

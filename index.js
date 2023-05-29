//1
var a;
a = function () {
    console.log("it work");
};
function fun() {
    return function () {
        console.log("it work");
    };
}
//2
var c;
c = function () {
    console.log("It work");
};
//3
var d;
d = function (pass) {
    return pass;
};
var f = function (pass) {
    return pass;
};
var h = function (pass) { return pass; };
function test(cb) {
    var s = cb();
    return s;
}
test(function () { return "hello"; });

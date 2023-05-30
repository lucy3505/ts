//tsc index.ts非空检查
// tsc index.ts --strictNullChacks严格的空检察
function splitInHalf(str) {
    var checkString = function () {
        if (str === null || str === undefined) {
            str = "test";
        }
    };
    checkString();
    //! str!告诉编译器不能为空
    return str.substring(0, str.length / 2);
}
var s = splitInHalf("hello");
console.log(s);

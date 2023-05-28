//模版
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//生成一个对象
var aPerson = new Person();
//设置firstName的内容
aPerson.firstName = "rails";
//读取 firstName的内容
console.log(aPerson.firstName);
var Movie = /** @class */ (function () {
    //this 指向生成的object本身
    function Movie(name, play_count) {
        this.name = name;
        this.play_count = play_count;
    }
    //method 方法 可能会对数据进行操作
    Movie.prototype.display_play_count = function (padding) {
        if (padding === void 0) { padding = "******"; }
        return "".concat(this.play_count, " \u6B21\u6570 ").concat(padding);
    };
    //对bject的数据进行操作
    Movie.prototype.increase_play_count = function () {
        this.play_count += 1;
    };
    return Movie;
}());
//生成一个 object
var m = new Movie("诱人的typescript", 14);
// m.name = "诱人的typescript";
console.log(m.name);
console.log("".concat(m.play_count, " \u5206\u949F"));
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());

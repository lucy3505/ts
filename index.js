//模版
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("hi");
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log("*******");
    };
    return Person;
}());
//继承父类的数据和行为，就是属性和方法
//它的父类就是Person
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("hello world");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        this.greet();
        //super代表父类
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer(); //这里aProgrammer类型可以用Programmer,因为是Programmer new 出来的
aProgrammer.greet();
aProgrammer.greetLikeNormalPeople();
var aProgrammer2 = new Programmer(); //这里aProgrammer2类型可以用Person,但是使用的时候就只能用Person里的内容，否则编译报错
aProgrammer2.greet();
aProgrammer2.greetLikeNormalPeople(); //
aProgrammer2.othergreet(); //
var aProgrammer3 = new Programmer(); //这里aProgrammer3类型用Object也不报错，但用string是报错的，因为Object是Programmer的父类
var aProgrammer4 = new Person(); //这样也不行，Programmer这个得是Person的父类才可以

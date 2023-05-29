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
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.sayHi = function () {
        console.log("private sayHi");
    };
    Person.prototype.callSayHi = function () {
        this.sayHi();
        console.log("*****");
    };
    //public
    //set 方法
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.greet = function () {
        console.log("hi");
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log("*******");
    };
    return Person;
}());
var aPerson = new Person("rail", "365"); //Constructor of class 'Person' is protected and only accessible within the class declaration.
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        console.log("Programmer constructor");
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log("heelo world");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    //子类定义的方法
    Programmer.prototype.getFullName = function () {
        // return `${this.firstName} ${this.lastName}`;
    };
    Programmer.prototype.getFullName1 = function () {
        return "".concat(this.getFirstName(), " ").concat(this.getLastName());
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer("rail", "365 ");
// Constructor of class 'Person' is protected and only accessible within the class declaration
//需要在class Programmer constructor里进行重写，父类的constructor 是protected的时候可以重写，是private 的时候不能重写
//是protected的时候，父类不能new,子类在重写constructor后能new

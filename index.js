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
        this.firstName = "rials";
        this.lastName = "hrrp";
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
var aPerson = new Person();
// aPerson.lastName = "jj";//Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.
// console.log(aPerson.firstName); //Property 'firstName' is private and only accessible within class 'Person'
aPerson.setFirstName("rails");
aPerson.getFirstName();
aPerson.callSayHi();
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("heelo world");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    //子类定义的方法
    Programmer.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Programmer.prototype.getFullName1 = function () {
        return "".concat(this.getFirstName(), " ").concat(this.getLastName());
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer();
//继承的也是不能访问私有属性
console.log(aProgrammer.firstName); //Property 'firstName' is private and only accessible within class 'Person'
//继承过来 的方法
console.log(aProgrammer.getFirstName()); //Property 'firstName' is private and only accessible within class 'Person'
console.log(aProgrammer.lastName); //Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.
console.log(aProgrammer.getFullName());
console.log(aProgrammer.getFullName1());

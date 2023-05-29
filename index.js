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
        this.name = "123";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.getStaticAge = function () {
        return "my age is ".concat(Person.age);
    };
    Person.prototype.getAge = function () {
        return "my age is ".concat(Person.age);
    };
    Person.all = function () {
        //Person对应数据库的一个表模型
        //可以列出persons表的所有记录
        //new出来的可能是一条记录，要找到所有记录，可能要通过静态方法
        // return Person.select().all()
    };
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
    //静态属性 static
    Person.age = 10;
    return Person;
}());
// console.log(Person.age);
var aPerson = new Person("rail", "365"); //Constructor of class 'Person' is protected and only accessible within the class declaration.
console.log(aPerson.getAge());
//public的getStaticAge来调用protected 的static age,如果是private，那不能访问
console.log(Person.getStaticAge());
console.log(aPerson.name);
aPerson.name = "222"; //Cannot assign to 'name' because it is a read-only property.
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
    Programmer.getSuperAge = function () {
        return "super age is ".concat(Person.age);
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
console.log(Programmer.age); //Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(Programmer.getStaticAge());
console.log(Programmer.getSuperAge());

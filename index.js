//函数
// 只要传过来的参数 o 有name 属性
// o 可以是一个接口类型，这个接口类型要有name 属性
//定义o为接口类型，可以传入一个对象，如果不用接口类型，sayName(‘122’);编译不会报错，只有运行的时候才能抱错
var sayName = function (o) {
    o.print(o.name);
};
//对象
var person = {
    age: 27,
    name: "hfpp2012",
    print: function (name) {
        console.log(name);
    },
};
sayName(person);
// const bottle = {
//   litres: 1,
//   name: "biaoliu",
// };
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.print = function () {
        //不传参也是可以的
        console.log(this.name);
    };
    return Person;
}());
var aPerson = new Person();
// aPerson.name = "rails365";
// sayName(aPerson);
// sayName(bottle);

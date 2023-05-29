var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    //读取
    Person.prototype.getName = function () {
        return this._name;
    };
    //设置
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person("hp", 22);
//输出name
console.log(p.getName());
console.log(p.name);
//如果要用p.name来读取呢
//修改name
p.setName("jp");
p.name = "jp2";
console.log(p);

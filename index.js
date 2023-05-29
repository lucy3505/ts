var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    return Person;
}());
var p = new Person("nnn", 12);
console.log(p);
var Person1 = /** @class */ (function () {
    //这个写法和Person一样，不用写 this._name = name; this._age = age;
    function Person1(_name, _age) {
        this._name = _name;
        this._age = _age;
    } //
    return Person1;
}());
var p1 = new Person1("nnn", 12);
console.log(p1);

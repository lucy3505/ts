"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var foo = new Person();
foo.firstName = "Test";
console.log(foo.firstName);
var a = [1, 2, 3];
_.reverse(a);
console.log(a);

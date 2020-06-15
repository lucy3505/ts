//class:定义了一切事物的抽象特点
//object:类的实例
//面向对象（oop):三大特性：封装，继承，多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('lily');
console.log(snake.run());
//tsc -w class.ts
//npm i -g ts-node

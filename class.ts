//class:定义了一切事物的抽象特点


//object:类的实例

//面向对象（oop):三大特性：封装，继承，多态

class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

    const snake = new Animal('lily')
    console.log(snake.run())

//tsc -w class.ts
//node class.js
//npm i -g ts-node  这个是把上两步合二为一
//ts-node class.ts

class Dog extends Animal {
    bark(){
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
    constructor(name) {//写构造函数，必须在子类中调用super，否则会报错，必须使用super函数调用父类方法，否则会报错，重写父类方法
       super(name)
       console.log(this.name)
    }
    run(){
        return  `mou,` + super.run()
    }
}
const cat = new Cat('maomao')
console.log(cat.run())
//super
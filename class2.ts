//修饰符,给类上的属性和方法提供权限管理，有些是不暴露给外部使用的，ts提供了3种访问修饰符
// 1.public，private，protected
//1.public修饰的属性和方法是所有地方都能访问到，是默认的

class Animal2 {
    static category:string[]=['snake','cat']
    private name:string;//这里Public可加可不加，默认的,改成private,只能在这个类里面访问子类也不能访问,protected子类能访问，readonly是只读
    constructor(name:string){
        this.name = name
    }
    public run() {//这里的public也是可加可不加，默认public
        return `${this.name} is running`
    }
}
class Cat2 extends Animal2 {
    constructor(name){
        super(name)

    }
}

const snake2 = new Animal2('lily')
console.log(snake2.name)
snake2.name = "lucy"
console.log(snake2.name)

//静态属性和方法，和实例无关就可以用静态属性
static
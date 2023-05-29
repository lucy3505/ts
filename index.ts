interface Person {
  name: string;
}

interface Employee {
  age: number;
}

//继承另一个接口
//会继承Person的属性和方法
interface Programmer extends Person {
  age: number;
}

let p: Programmer = {
  age: 27,
  name: "rails",
};

//类不能继承多个类，也就是说不能有多个父亲
//但可以实现多个接口
//每个接口的属性和方法都要实现
class P implements Person, Employee {
  name: string;
  age: number;
}

let p1: P = {
  name: "rail",
  age: 25,
};
let p2: Person = p1;

let p3: Employee = p1;

//p2和p3都是看起来像鸭子就可以，p4用这种写法不能有age属性
let p4: Person = { name: "12", age: 12 };

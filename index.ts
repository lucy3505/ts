//不能实例化,要用另一个类去继承它
abstract class Person {
  abstract subName: string;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  //抽象的方法
  //没有方法体
  //继承这个抽象类的时候，一定要去实现这个抽象方法
  //可加public private，protected控制符
  public abstract find(string): Person;
}

let p: Person = new Person("xxx"); // Cannot create an instance of an abstract class.

class Employee extends Person {
  empCode: number;
  subName: string;
  constructor(name: string, code: number) {
    super(name); //必须调用super
    this.subName = name;
    this.empCode = code;
  }

  public find(name: string): Person {
    return new Employee(name, 1);
  }
}

let p1: Person = new Employee("xxx", 12);
let p2: Person = p1.find("rails");
console.log(p2);

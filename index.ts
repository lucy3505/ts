//接口
//传过来的参数必须包含接口的属性和方法
interface Named {
  //属性
  name: string;
  //方法
  //没有方法体的
  //具体的对象中实现方法体
  print(name: string): void;
}

//函数
// 只要传过来的参数 o 有name 属性
// o 可以是一个接口类型，这个接口类型要有name 属性
//定义o为接口类型，可以传入一个对象，如果不用接口类型，sayName(‘122’);编译不会报错，只有运行的时候才能抱错
const sayName = (o: Named) => {
  o.print(o.name);
};

//对象
const person = {
  age: 27,
  name: "hfpp2012",
  print: (name) => {
    console.log(name);
  },
};
sayName(person);
// const bottle = {
//   litres: 1,
//   name: "biaoliu",
// };

class Person {
  name: string;
  print(): void {
    //不传参也是可以的
    console.log(this.name);
  }
}

let aPerson = new Person();
// aPerson.name = "rails365";

// sayName(aPerson);

// sayName(bottle);

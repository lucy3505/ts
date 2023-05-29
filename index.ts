interface Person {
  first_name: string;
  last_name?: string;

  print?(): void;
  //后面会讲
  [propName: string]: any;
}

let person = {
  first_name: "111",
  // last_name: "rails",
  age: 12,
};

class Programmer implements Person {
  first_name: string;
}

const programmer = new Programmer();
programmer.first_name = "tony";

const sayName = (o: Person) => {
  console.log(o.first_name);
};

sayName(programmer);

sayName(person);

sayName({ first_name: "xxx", age: 22 }); //error TS2345: Argument of type '{ first_name: string; age: number; }' is not assignable to parameter of type 'Person'.
// Object literal may only specify known properties, and 'age' does not exist in type 'Person'.
//!直接传对象必须和接口参数一致, 用变量就没关系 sayName(person);

//类型断言
sayName({ first_name: "xxx", age: 22 } as Person);
//使用 [propName:string]:any
sayName({ first_name: "xxx", age: 22, lasst_name: "12" });

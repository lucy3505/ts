import * as _ from "lodash";

class Person {
  firstName: string; //默认给any类型
  lastName: string;
}

let foo = new Person();
foo.firstName = "Test";

console.log(foo.firstName);

let a = [1, 2, 3];
_.reverse(a);
console.log(a);

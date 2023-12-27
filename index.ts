//x 代表可以是任何类型，比如字符串number之类的
let x: any = "hi there ";

//x可以是任何类型，编译器可能不能明确知道x是哪种类型
//<string>表示把X 断言成字符串类型，就是告诉编译器要把X当成字符串，这样
//就可以调用substring函数，因为字符串才有这个函数
let s = (<string>x).substring(0, 3);
console.log(s);

let n = <number>x;
console.log(typeof n); //string,说明<number>并不是类型转换，而是类型断言，让编译器在编译的时候做为number来编译

//编译起可能不知道明确的类型，因为可能是两者之一
function getLength(something: string | number): number {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
  // return something.length; // Property 'length' does not exist on type 'number'.
}

function getLength2(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
  // return something.length; // Property 'length' does not exist on type 'number'.
}

//会抱错
function toBoolean(something: string | number): boolean {
  return <boolean>something; //也不能随意断言，因为string和number没法转化成boolean,getLength2中的number是可以用 .toString()转化成string的，所以不会抱错
}

//!现在用这种写法会报错了
let person = {};
person.name = "rails";
person.age = 22;

interface Person {
  name: string;
  age: number;
}

//另一种类型断言方式 as
//更好的明确类型和类型里面的结构
let person2 = {} as Person;
person2.name = "rails";
person2.age = 22;
person2.firstName = "222";

// 另一种写法
//react <div></div>可能和这个冲突，所以可以用as断言
let person3 = <Person>{
  name: "rails3",
  age: 2,
};

//上面哪种是类型断言的写法，这种是给一个类型
let person4: Person = {
  name: "rails3",
  age: 2,
};

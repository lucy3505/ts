//函数名相同，参数不同
//没有实现的定义
function sum(x: number, y: number): number;
function sum(x: number, y: number, z: number): number;

//上面两种定义的组合实现
function sum(x: number, y: number, z?: number): number {
  // console.log(typeof z);
  if (typeof z === "undefined") {
    return x + y;
  } else {
    return x + y + z;
  }
}

sum(1, 2);
let n = sum(1, 2, 3);
// console.log(n);

n = sum(1, 2);
// console.log(n);

function divide(x: number, y: number): number;
function divide(str: string, y: number): string[];

function divide(x: any, y: number): any {
  if (typeof x === "number") {
    return x / y;
  } else if (typeof x === "string") {
    return [x.substring(0, y), x.substring(y)];
  }
}

let n1: number = divide(6, 2);
console.log(n1);

let s: string[] = divide("football", 4);
console.log(s);

//class中函数重载
//静态方法和实例方法
class Util {
  divide(x: number, y: number): number;
  divide(str: string, y: number): string[];

  divide(x: any, y: number): any {
    if (typeof x === "number") {
      return x / y;
    } else if (typeof x === "string") {
      return [x.substring(0, y), x.substring(y)];
    }
  }
}

let a: Util = new Util();
console.log(a.divide(6, 2));
console.log(a.divide("hello world", 4));

class Util2 {
  static divide(x: number, y: number): number;
  static divide(str: string, y: number): string[];

  static divide(x: any, y: number): any {
    if (typeof x === "number") {
      return x / y;
    } else if (typeof x === "string") {
      return [x.substring(0, y), x.substring(y)];
    }
  }
}

let c: number = Util2.divide(6, 2);

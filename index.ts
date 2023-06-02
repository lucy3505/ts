function createInstance<T>(t: new () => T): T {
  //这里的new是要传个class 可以new的,对构造函数的一个约束
  return new t();
}

class Test {
  x: number = 4;
  constructor(x: number) {
    //如果这里用了constructor里面放了参数， 那么new ()=>T 就有问题，因为new ()=>T是没带参数，要带参数就变成new (x:number)=>T
  }
}

//  let test:Test=new Test()
//! class是可以直接当类型使用let test:Test， 正常声明类型使用type,interface，object,number等
let test: Test = createInstance<Test>(Test);
console.log(test);

//!
function createInstance2<T>(t: new () => T): T {
  //这里的new是要传个class 可以new的,对构造函数的一个约束
  return new t();
}

interface IObj {
  a: number;
}
const Obj = { a: 1 };

//  let test:Test=new Test()

let test2: IObj = createInstance<IObj>(Obj); //
console.log(test);

let test3: object = createInstance<object>(Obj); //
console.log(test);

function createInstance3<T>(
  t: new (...constructorArgs: any[]) => T,
  ...args: any[]
): T {
  //这里的new是要传个class 可以new的,对构造函数的一个约束
  return new t(args);
}

class Test3 {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
}

// let test

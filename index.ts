class A {
  x: number = 5;
}

let y: keyof A; //说明y的取值范围只能是A的属性名
y = "x";
// y = "xa";//这里就会抱错，A没有这个属性

class Test {
  x: number = 6;
}

function getProp(a: keyof Test, test: Test): any {
  return test[a];
}

let t: Test = new Test();
let prop = getProp("x", t);
console.log(prop);

class B {
  y: keyof A;
  getAProp(a: A): any {
    return a[this.y];
  }
}

let b: B = new B();
b.y = "x";

let prop1 = b.getAProp(new A());
console.log(prop1);

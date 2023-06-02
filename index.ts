interface Shape {
  draw(): void;
}

function drawShapes<S extends Shape>(shapes: S[]): void {
  shapes.forEach((shape) => shape.draw());
} //这里S extends Shape 传入的S必须要实现Shape

var a: Shape = {
  draw() {
    console.log("aa");
  },
};

var b = {
  // draw() {
  //   console.log("bb");
  // },
  bb: 1,
}; //

class Circle implements Shape {
  draw(): void {
    console.log("drawing Circle");
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log("drawing Rectangle");
  }
}

let circle = new Circle();
let rectangle = new Rectangle();

// drawShapes([circle, rectangle, b]);//这里b就不行，但是如果b里面有draw方法也是可以的
drawShapes([circle, rectangle]);

//K keyof T:K 是T的属性
//extends 就是只要表象就行，可以是class也可以是object
function getProp<T, K extends keyof T>(key: K, obj: T): any {
  return obj[key];
}

let obj = { a: 2, b: 3 };
let prop = getProp("b", obj);

function getProp2<T>(key: keyof T, obj: T): any {
  return obj[key];
}

let obj2 = { a: 2, b: 3 };
let prop2 = getProp("b", obj);

console.log("prop2::", prop2);

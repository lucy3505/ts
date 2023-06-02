interface Shape {
  draw(): void;
}

function drawShapes(shape: Shape): Shape {
  shape.draw();
  return shape;
}

let a = { draw: () => {} };

drawShapes(a);

class Circle implements Shape {
  draw(): void {
    console.log("drawing Circle");
  }
  n: "circle";
}

class Rectangle implements Shape {
  draw(): void {
    console.log("drawing Rectangle");
  }
}

let circle = new Circle();
let rectangle = new Rectangle();

let c = drawShapes(circle); //! 这里推导出c的类型是Shape 但我希望是Circle
let c1: Circle = drawShapes(circle); //这里 = 右边推导出的是Shape 我左边给的类型是Circle 我希望右边能给我Circle,这里就要用泛型

function drawShapes1<Shape1 extends Shape>(shape: Shape1): Shape1 {
  //Shape1是泛型 现在Shape1泛型可以是任何类型 想要对这个泛型做限制，所以Ts提供extends做限制，extends在这里不是继承，而是约束,只能继承类Shape这种类型的变量，可以扩展Shape属性
  shape.draw();
  return shape;
}

let c2 = drawShapes1(circle);
let c3 = drawShapes1(circle); //! 这里就能推出Circle，Circle是比Shape属性多的

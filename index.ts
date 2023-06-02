function foo(x: number, y: number, z: number) {
  console.log(x, y, x);
}

var args: number[] = [0, 1, 2];

//方法一：
foo.apply(null, args);
foo.apply(void 0, args);

foo(...args);
//1
(<any>foo)(...args); //类型断言

//2
function foo1(...x: number[]) {
  console.log(JSON.stringify(x));
}
foo1(...args);

//3
function foo2(...x: number[]): void;

function foo2(x: number, b: number, c: number) {
  console.log(x, b);
}

foo2(...args);
foo2(1, 2, 3);

//destructuring 解构
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining);

//Array Assignment
var list = [1, 2];
list = [...list, 3, 4];
console.log(list);

//Object spread
const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };
console.log(point3D);

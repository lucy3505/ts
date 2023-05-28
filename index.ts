function add(a, b) {
  return a + b;
}

// let sum=add("10")//这里报错，对参数个数是有限制的
// console.log(sum)

function add1(a: number, b: number): number {
  return a + b;
}
const add2 = (a: number, b: number) => {
  return a + b;
};

let sum2 = add1(19, 29); //这里对类型进行了限制
let sum3 = add1("19", 29); //这里对类型进行了限制

//返回值
const add3 = (a: number, b: number): number => {
  return a + b;
};
let sum = add3(1, 2);
console.log(sum.toFixed(2));

const add4 = (a: number, b: number): string => {
  return a.toString() + b.toString();
};
let sum4 = add4(1, 2);
console.log(sum4.substring(2, 2));

//没有返回值:void

const add5 = (a: number, b: number): void => {
  console.log(11);
};

//默认值  c=20会自动继承类型number
const add6 = (a: number, b: number = 10, c = 20): void => {
  console.log(a + b + c);
};
const sum6 = add6(1);

//可选参数 对于可选参数这种，函数内要注意对这个可选参数的判断
const add7 = (a: number, b?: number): void => {
  if (b) {
    console.log(a + b);
  } else {
    console.log(a);
  }
};
const sum7 = add7(1);

//参数不确定，也要保证能正常运行 restParams
const add8 = (a: number, ...num: number[]): number => {
  return num.reduce(function (total, num) {
    return total + num;
  }, a);
};
const sum8 = add8(1, 2, 3, 4, 5);
console.log(sum8);

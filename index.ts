let a: any;

a = 10;
a = "11";
a = [1, 2, 3];

const log = (value: any) => {
  if (typeof value === "number") {
    return `your number is ${value}`;
  }
  if (typeof value === "string") {
    return `your name is ${value}`;
  }

  throw new Error(`Expected string or number,got ${value}.`);
};

console.log(log("hfppjj"));

let b: any[];
b = [1, 2, "123", [1, 2, 3]];

//typescript自己进行的判断:作为了解 value is number 是ts自己做的判断
function isNumber(value: any): value is number {
  //可以进行进一步处理
  //   return typeof value === "number";

  return true;
}

function isString(value: any): value is string {
  return typeof value === "string";
}

const log2 = (value: any) => {
  if (isNumber(value)) {
    return `your number is ${value}`;
  }
  if (isString(value)) {
    return `your name is ${value}`;
  }

  throw new Error(`Expected string or number,got ${value}.`);
};

console.log(log(222));

//union type
const log3 = (value: string | number | boolean | null) => {
  if (isNumber(value)) {
    return `your number is ${value}`;
  }
  if (isString(value)) {
    return `your name is ${value}`;
  }

  // throw new Error(`Expected string or number,got ${value}.`);
};

console.log(log3(undefined)); //undefined和null 是自己独自的类型

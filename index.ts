interface States {
  [state: string]: boolean; //state可以任意名称，只要类型对应上
}

let s: States = { enabled: true, maximized: false, aaa: "dfd" }; //aaa必须是字符串
let s1: States = [true, false]; //数组的索引前面是number
console.log(s);
console.log(s["enabled"]);

interface State1 {
  //没有array的方法push,join，length...
  [index: number]: boolean;
}

let s2: State1 = [true, false]; //如果 [index:number]这个是number的话，就可以是个数组
let s23: State1 = { 1: true, 2: false }; //如果 [index:number]这个是number的话，就可以是个数组
console.log(s2);
console.log(s2[1]);
console.log(s2.length);

let s22: number[] = [1, 2, 3];
console.log(s22.length);
//?这个和interface State1有什么区别
//1. interface State1可以是对象，可以是数组，比较灵活
//2. interface State1没有length,s22有length，s2没有array的方法push,join...，s22有

//An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
interface State2 {
  [index: boolean]: boolean; //index这里的类型永远是 'string', 'number', 'symbol'，不可能是boolean
}

interface States3 {
  [index: number]: boolean;
  length: number;
  pop(): boolean | undefined;
}

let s33: States3 = [true, false, false, true];
console.log(s33);
console.log(s33.length);
console.log(s33.pop());

interface State4 {
  mainScreen: string;
  [state: string]: boolean;
  // mainScreen:boolean//必须和上面一样是boolean,否则抱错
  // mainScreen:strmainScreen:stringing//mainScreen和[state:string]声明的类型一定要相同
}

let s4: State4 = { mainScreen: true, max: false };

//! 定义一些复杂结构
interface NestedCss {
  color?: string;
  nest?: {
    [selector: string]: NestedCss;
  };
}

let example: NestedCss = {
  color: "red",
  nest: {
    ".subclass": {
      color: "blue",
      nest: {
        ".sub": { color: "blue" },
      },
    },
  },
};

let c1: NestedCss = {
  color: "Red",
};

// root -> tree

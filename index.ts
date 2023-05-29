interface Person {
  readonly first_name: string;
  last_name?: string;
  print?(callback: PrintCallback): void; //有名称的函数
  [propName: string]: any;
}

interface PrintCallback {
  //可以简单理解为匿名函数
  (success: boolean, name?: string): void;
}

let printCallback: PrintCallback;
// printCallback = () => {}; 这样写也行，不传参数

//如果传参了，参数的类型要一致,返回值也要一致
// printCallback = (suc: number): number => {}; // Type 'boolean' is not assignable to type 'number'.
printCallback = (suc: boolean): void => {
  console.log("callback", suc);
}; // 少参数也是可以的，如果加参数，那你类型要一致

let person: Person = {
  first_name: "hello",

  print: (callback: PrintCallback): void => {
    console.log("hello");
    callback(true);
  },
};

person.print && person.print(printCallback);

//定义类型别名 type alias
//以后就可以用Name来代替string类型
type Name = string;

let my_name: Name = "rails";
// let my_name: Name = true;

// let my_name: string = "rails";

type User = {
  name: string;
  age: number;
  print(): void;
};

// type User={ //!没法2个type混一起，type不能重复定义，interface可以混一起，所以interface用的比较多，interface还可以继承
//   email:string
// }

const user: User = {
  name: "rails",
  age: 27,
  print() {
    console.log("123");
  },
};

const user2: { name: string; age: number } = {
  name: "rail",
};

const user3: IUser = {
  name: "rails",
  // age: 27,
};

interface IUser {
  name: string;
  age: number;
}

interface IUser {
  email: string;
}

const other_user: IUser = {
  name: "rails",
  age: 22, //!必须要有email，两个interface会混一起
};

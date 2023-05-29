class Person {
  private _name: string; //如果是private
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  //读取
  getName(): string {
    return this._name;
  }

  //设置
  setName(name: string): void {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

let p: Person = new Person("hp", 22);
//输出name
console.log(p.getName());
console.log(p.name);
//如果要用p.name来读取呢

//修改name
p.setName("jp");
p.name = "jp2";
console.log(p);

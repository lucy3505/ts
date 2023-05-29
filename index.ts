class Person {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
}

let p: Person = new Person("nnn", 12);
console.log(p);

class Person1 {
  //这个写法和Person一样，不用写 this._name = name; this._age = age;

  constructor(private _name: string, private _age: number) {} //
}
let p1: Person1 = new Person1("nnn", 12);
console.log(p1);

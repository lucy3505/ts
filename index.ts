//模版

class Person {
  //定义了两个数据
  private firstName: string; //对类型进行限制
  protected lastName;

  constructor() {
    this.firstName = "rials";
    this.lastName = "hrrp";
  }
  private sayHi() {
    console.log("private sayHi");
  }

  public callSayHi() {
    this.sayHi();
    console.log("*****");
  }

  //public
  //set 方法
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  protected getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  public greet() {
    console.log("hi");
  }

  public othergreet() {
    this.greet();
    console.log("*******");
  }
}

let aPerson = new Person();
// aPerson.lastName = "jj";//Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.
// console.log(aPerson.firstName); //Property 'firstName' is private and only accessible within class 'Person'
aPerson.setFirstName("rails");
aPerson.getFirstName();
aPerson.callSayHi();

class Programmer extends Person {
  public greet(): void {
    console.log("heelo world");
  }

  public greetLikeNormalPeople() {
    super.greet();
  }

  //子类定义的方法
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getFullName1() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }
}

let aProgrammer = new Programmer();
//继承的也是不能访问私有属性
console.log(aProgrammer.firstName); //Property 'firstName' is private and only accessible within class 'Person'

//继承过来 的方法
console.log(aProgrammer.getFirstName()); //Property 'firstName' is private and only accessible within class 'Person'

console.log(aProgrammer.lastName); //Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.
console.log(aProgrammer.getFullName());
console.log(aProgrammer.getFullName1());

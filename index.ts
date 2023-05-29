//模版

class Person {
  //定义了两个数据
  private firstName: string; //对类型进行限制
  protected lastName;

  protected constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
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

let aPerson = new Person("rail", "365"); //Constructor of class 'Person' is protected and only accessible within the class declaration.

class Programmer extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    console.log("Programmer constructor");
  }

  public greet(): void {
    console.log("heelo world");
  }

  public greetLikeNormalPeople() {
    super.greet();
  }

  //子类定义的方法
  getFullName() {
    // return `${this.firstName} ${this.lastName}`;
  }

  getFullName1() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }
}
let aProgrammer = new Programmer("rail", "365 ");
// Constructor of class 'Person' is protected and only accessible within the class declaration
//需要在class Programmer constructor里进行重写，父类的constructor 是protected的时候可以重写，是private 的时候不能重写
//是protected的时候，父类不能new,子类在重写constructor后能new

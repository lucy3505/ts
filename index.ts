//模版

class Person {
  //定义了两个数据
  private firstName: string; //对类型进行限制
  protected lastName;

  //静态属性 static
  protected static age: number = 10;

  readonly name: string = "123";

  public constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static getStaticAge() {
    return `my age is ${Person.age}`;
  }

  getAge() {
    return `my age is ${Person.age}`;
  }

  static all() {
    //Person对应数据库的一个表模型
    //可以列出persons表的所有记录
    //new出来的可能是一条记录，要找到所有记录，可能要通过静态方法
    // return Person.select().all()
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

// console.log(Person.age);

let aPerson = new Person("rail", "365"); //Constructor of class 'Person' is protected and only accessible within the class declaration.
console.log(aPerson.getAge());

//public的getStaticAge来调用protected 的static age,如果是private，那不能访问
console.log(Person.getStaticAge());
console.log(aPerson.name);
aPerson.name = "222"; //Cannot assign to 'name' because it is a read-only property.
class Programmer extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    console.log("Programmer constructor");
  }

  public greet(): void {
    console.log("heelo world");
  }

  public static getSuperAge() {
    return `super age is ${Person.age}`;
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

console.log(Programmer.age); //Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(Programmer.getStaticAge());
console.log(Programmer.getSuperAge());

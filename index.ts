//模版

class Person {
  //定义了两个数据
  firstName: string; //对类型进行限制
  lastName;

  greet() {
    console.log("hi");
  }

  othergreet() {
    this.greet();
    console.log("*******");
  }
}

//继承父类的数据和行为，就是属性和方法
//它的父类就是Person
class Programmer extends Person {
  greet(): void {
    console.log("hello world");
  }

  greetLikeNormalPeople() {
    this.greet();
    //super代表父类
    super.greet();
  }
}

let aProgrammer: Programmer = new Programmer(); //这里aProgrammer类型可以用Programmer,因为是Programmer new 出来的
aProgrammer.greet();
aProgrammer.greetLikeNormalPeople();

let aProgrammer2: Person = new Programmer(); //这里aProgrammer2类型可以用Person,但是使用的时候就只能用Person里的内容，否则编译报错
aProgrammer2.greet();
aProgrammer2.greetLikeNormalPeople(); //
aProgrammer2.othergreet(); //

let aProgrammer3: Object = new Programmer(); //这里aProgrammer3类型用Object也不报错，但用string是报错的，因为Object是Programmer的父类

let aProgrammer4: Programmer = new Person(); //这样也不行，Programmer这个得是Person的父类才可以

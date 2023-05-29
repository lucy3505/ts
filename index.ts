interface Person {
  readonly first_name: string;
}

class Programmer implements Person {
  first_name: string;
}

const programmer = new Programmer(); //这里没有制定变量programmer的类型，所以没有报错，不受Person接口的限制
programmer.first_name = "tony";

const programmer2: Person = new Programmer();
//Cannot assign to 'first_name' because it is a read-only property.
programmer2.first_name = "tony"; //programmer2的类型声明了是Person，那么Person中的first_Name是readonly,不能修改

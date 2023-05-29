//接口
//支付接口
interface Person {
  name: string;

  greet(): void;
}

const sayName = (o: Person) => {
  o.greet();
};

//实现接口，微信支付，支付宝支付

//类实现接口
class Employee implements Person {
  //Employee这个类去实现Person这个接口,必须有name和greet，否则编译抱错

  name: string;
  greet(): void {
    console.log("I am employee");
  }
}

// let em = new Employee();
// em.greet();

class Customer implements Person {
  public name: string;
  public email: string;
  greet(): void {
    console.log("I am customer");
  }
}

// let cu = new Customer();

// sayName(cu);

let customer: Person = new Customer();
customer.greet();
let employee: Employee = new Employee();
employee.greet();

//支付接口
interface Pay {
  post(): void;
}

//可能会发送http请求
//真正支付的请求
const do_pay = (pay: Pay) => {
  //有一些逻辑
  pay.post();
};

//微信支付
class WePay implements Pay {
  //调微信支付的接口
  post(): void {}
}

//支付宝支付
class AliPay implements Pay {
  //调支付宝支付的接口
  post(): void {}
}

//其他支付的接口

let we_pay: Pay = new WePay();
let ali_pay = new AliPay();

//微信支付
do_pay(we_pay);
//支付宝支付
do_pay(ali_pay);

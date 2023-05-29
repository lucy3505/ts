var sayName = function (o) {
    o.greet();
};
//实现接口，微信支付，支付宝支付
//类实现接口
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function () {
        console.log("I am employee");
    };
    return Employee;
}());
// let em = new Employee();
// em.greet();
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greet = function () {
        console.log("I am customer");
    };
    return Customer;
}());
// let cu = new Customer();
// sayName(cu);
var customer = new Customer();
customer.greet();
var employee = new Employee();
employee.greet();
//可能会发送http请求
//真正支付的请求
var do_pay = function (pay) {
    //有一些逻辑
    pay.post();
};
//微信支付
var WePay = /** @class */ (function () {
    function WePay() {
    }
    //调微信支付的接口
    WePay.prototype.post = function () { };
    return WePay;
}());
//支付宝支付
var AliPay = /** @class */ (function () {
    function AliPay() {
    }
    //调支付宝支付的接口
    AliPay.prototype.post = function () { };
    return AliPay;
}());
//其他支付的接口
var we_pay = new WePay();
var ali_pay = new AliPay();
//微信支付
do_pay(we_pay);
//支付宝支付
do_pay(ali_pay);

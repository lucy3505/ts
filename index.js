if (true) {
    var a = 1;
}
console.log(a); //使用var 这里就不会报错，ts就不会报错，用let,ts就会报错
//定义类型和赋值:var 就可以重复定义相同名字变量，但不能改类型
var my_name = "rails3644";
console.log("my name is" + my_name);
var my_name = "hfpp2012";
console.log("my name is ".concat(my_name));
var my_name = 123;
console.log("my name is ".concat(my_name));
//定义类型和赋值:let 不可以重复定义相同名字变量 ts编译会给我们报错
var my_name1 = "rails3644";
console.log("my name is" + my_name1);
var my_name1 = "hfpp2012"; // 只能my_name1 = "hfpp2012";
console.log("my name is ".concat(my_name1));
//const 就是都不能改变

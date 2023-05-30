//!第一种：使用typeof
function show(x) {
    console.log(typeof x);
    if (typeof x === "number") {
        console.log("a number " + x);
    }
    else {
        console.log("a string " + x);
    }
}
show("test string ");
show(4);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
console.log(typeof person);
console.log(typeof new String("test"));
console.log(typeof undefined);
console.log(typeof null);
//!第二种：使用属性
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("car starting");
    };
    Car.prototype.drive = function () {
        console.log("car driving");
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log("bike starting");
    };
    Bike.prototype.ride = function () {
        console.log("bike ridding");
    };
    return Bike;
}());
//boolean 返回值发挥的作用是在运行时
//vehicle is Car发挥在编译时期
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
function move(vehicle) {
    vehicle.start();
    //vehicle.drive!==undefined
    // if (vehicle.drive) {//Property 'drive' does not exist on type 'Car | Bike'.
    if (vehicle.drive) {
        //用类型断言解决上面抱错
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
    //为了避免断言的写法，可以使用函数的写法
    if (isCar(vehicle)) {
        vehicle.drive(); //如果isCar()返回值是boolean，这里就会抱错：Property 'ride' does not exist on type 'Car | Bike'.
        //使用vehicle is Car就不会抱错，因为vehicle is Car发挥在编译时期，就是给vehicle断言了
    }
    else {
        vehicle.ride();
    }
    //!第三种 instanceof 不需要用断言，最好的方法
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
move(new Bike());

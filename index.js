var printCallback;
// printCallback = () => {}; 这样写也行，不传参数
//如果传参了，参数的类型要一致,返回值也要一致
// printCallback = (suc: number): number => {}; // Type 'boolean' is not assignable to type 'number'.
printCallback = function (suc) {
    console.log("callback", suc);
}; // 少参数也是可以的，如果加参数，那你类型要一致
var person = {
    first_name: "hello",
    print: function (callback) {
        console.log("hello");
        callback(true);
    },
};
person.print && person.print(printCallback);

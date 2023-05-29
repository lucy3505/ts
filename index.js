var my_name = "rails";
// type User={ //!没法2个type混一起，type不能重复定义，interface可以混一起，所以interface用的比较多，interface还可以继承
//   email:string
// }
var user = {
    name: "rails",
    age: 27,
    print: function () {
        console.log("123");
    },
};
var user2 = {
    name: "rail",
};
var user3 = {
    name: "rails",
    // age: 27,
};
var other_user = {
    name: "rails",
    age: 22, //!必须要有email，两个interface会混一起
};

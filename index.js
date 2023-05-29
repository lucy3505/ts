var s = { enabled: true, maximized: false, aaa: "dfd" }; //aaa必须是字符串
var s1 = [true, false]; //数组的索引前面是number
console.log(s);
console.log(s["enabled"]);
var s2 = [true, false]; //如果 [index:number]这个是number的话，就可以是个数组
var s23 = { 1: true, 2: false }; //如果 [index:number]这个是number的话，就可以是个数组
console.log(s2);
console.log(s2[1]);
console.log(s2.length);
var s22 = [1, 2, 3];
console.log(s22.length);
var s33 = [true, false, false, true];
console.log(s33);
console.log(s33.length);
console.log(s33.pop());
var s4 = { mainScreen: true, max: false };
var example = {
    color: "red",
    nest: {
        ".subclass": {
            color: "blue",
            nest: {
                ".sub": { color: "blue" },
            },
        },
    },
};
var c1 = {
    color: "Red",
};
// root -> tree

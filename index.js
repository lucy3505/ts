//可以用很多类型来代替 T
//T[]代表数组，每个元素都是T类型
function getArray(items) {
    return new Array().concat(items);
}
// function getArray(items: number[]): number[] {
//   return new Array().concat(items);
// }
//调用，可以传入很多类型，代码复用
var myNumArray = getArray([100, 200]);
var myStrArray = getArray(["hello", '"world']);
//这样写会推断T是boolean类型，但这样不推荐
var myBooleanArray = getArray([true, false]);
myNumArray.push(200);
myNumArray.push("222");
myStrArray.push(123);
myStrArray.push("123");
myBooleanArray.push("123");
function getArray1(items) {
    console.log(items.length); //T可以是任何类型，length不是任何类型都有的
    return T;
}
function getArray2(items, name) {
    console.log(items.length); //T可以是任何类型，所有length不是任何类型都有的
    return items;
}

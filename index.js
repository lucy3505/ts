var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
var pair = new Pair(true, "11");
console.log(pair.first);
// Pair<F, S>[]的另一种写法Array<Pair<F,S>>,F[]===Array<F>
//pairs是个数组参数，数组中的每个元素是Pair<F,S>类型
function getFirstArray(pairs) {
    var arr = [];
    for (var i = 0; i < pairs.length; i++) {
        var first = pairs[i].first;
        arr.push(first);
    }
    return arr;
}
//像Pair<F, S>这个是class，用的时候只要new就可以了
var numArray = [
    new Pair(1, true),
    new Pair(2, false),
    new Pair(4, true),
];
console.log(getFirstArray(numArray));
function findFirst(items, searchFunction) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (searchFunction(item)) {
            return item;
        }
    }
    return null;
}
var items = [1, 2, 3, 4];
var n = findFirst(items, function (t) { return t % 2 === 0; });
console.log(n);
var items2 = ["one", "two", "three"];
var s = findFirst(items2, function (s) { return s.indexOf("wo") !== -1; });
console.log(s);

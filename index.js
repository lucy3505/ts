var p = {
    first: "rails",
    second: 22,
};
var c = {
    id: Math.random().toString(35),
    run: function () {
        return 100;
    },
};
console.log(c.id);
console.log(c.run());
function checkElementAt(elements, toBeChecked, atIndex) {
    return elements[atIndex] === toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7, 9];
var b = checker(items, 5, 2);
console.log(b);
var g = checker(items, 5, 1);
console.log(g);

var numList = { elements: [1, 2, 3] };
console.log(numList);
var itemEntity = { id: 1, name: "tail", price: 222 };
console.log(itemEntity);
function showPersonContact(personContact) {
    console.log(personContact);
}
// &就是把两个类型合一起
var personContact = { name: "Dane", phone: "111-222-333" };
showPersonContact(personContact);
var personDetail = {
    detail: { name: "Dane", phone: "111-222-333" },
};
console.log(personDetail);

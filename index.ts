type ListType<T> = { elements: T[] };

let numList: ListType<number> = { elements: [1, 2, 3] };
console.log(numList);

interface Item {
  name: string;
  price: number;
}

type Entity<E> = { id: number } & E;
let itemEntity: Entity<Item> = { id: 1, name: "tail", price: 222 };
console.log(itemEntity);

interface Person {
  name: string;
}

interface Contact {
  phone: string;
}

function showPersonContact(personContact: Person & Contact): void {
  console.log(personContact);
}

// &就是把两个类型合一起
let personContact: Person & Contact = { name: "Dane", phone: "111-222-333" };
showPersonContact(personContact);

interface PersonDetail {
  detail: Person & Contact;
}

let personDetail: PersonDetail = {
  detail: { name: "Dane", phone: "111-222-333" },
};
console.log(personDetail);

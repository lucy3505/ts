interface Pair<F, S> {
  first: F;
  second: S;
}

let p: Pair<string, number> = {
  first: "rails",
  second: 22,
};

interface Command<T, R> {
  id: T;
  run(): R;
}

let c: Command<string, number> = {
  id: Math.random().toString(35),
  run: function () {
    return 100;
  },
};
console.log(c.id);
console.log(c.run());

interface ElementChecker {
  //函数
  <T>(items: T[], toBeChecked: T, atIndex: number): boolean;

  //function a<T>(items: T[], toBeChecked: T, atIndex: number):boolean
}

function checkElementAt<T>(
  elements: T[],
  toBeChecked: T,
  atIndex: number
): boolean {
  return elements[atIndex] === toBeChecked;
}

let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7, 9];
let b: boolean = checker<number>(items, 5, 2);
console.log(b);
let g: boolean = checker<number>(items, 5, 1);
console.log(g);

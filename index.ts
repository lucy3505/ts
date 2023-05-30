class Pair<F, S> {
  first: F;
  second: S;

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

let pair = new Pair<boolean, string>(true, "11");
console.log(pair.first);

// Pair<F, S>[]的另一种写法Array<Pair<F,S>>,F[]===Array<F>
//pairs是个数组参数，数组中的每个元素是Pair<F,S>类型
function getFirstArray<F, S>(pairs: Pair<F, S>[]): F[] {
  let arr: F[] = [];
  for (let i = 0; i < pairs.length; i++) {
    let first: F = pairs[i].first;
    arr.push(first);
  }
  return arr;
}

//像Pair<F, S>这个是class，用的时候只要new就可以了
let numArray: Pair<number, boolean>[] = [
  new Pair(1, true),
  new Pair(2, false),
  new Pair(4, true),
];
console.log(getFirstArray(numArray));

function findFirst<T>(items: T[], searchFunction: (t: T) => boolean): T | null {
  for (let i = 0; i < items.length; i++) {
    let item: T = items[i];
    if (searchFunction(item)) {
      return item;
    }
  }
  return null;
}

let items: number[] = [1, 2, 3, 4];
let n: number | null = findFirst(items, (t: number) => t % 2 === 0);
console.log(n);

let items2: string[] = ["one", "two", "three"];
let s: string | null = findFirst<string>(
  items2,
  (s: string) => s.indexOf("wo") !== -1
);
console.log(s);

interface States<R> {
  [state: string]: R;
}

let s: States<boolean> = { enabled: true, max: false };
console.log(s);
console.log(s["max"]);

interface Pair<F, S> {
  first: F;
  second: S;
}

interface States2<F, S> {
  [state: string]: Pair<F, S>;
}

let s2: States2<number, boolean> = {
  enabled: { first: 1, second: true },
  max: { first: 2, second: false },
};
console.log(s2);
console.log(s2["max"]);

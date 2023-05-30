//x? number|undefined
function show(x: number | undefined | null): void {
  // function show(x?: number  | null): void {//加了？就是undefined可以传，但是null要加进去，否则不能传null
  if (x === undefined) {
    console.log("value not set");
  } else if (x === null) {
    console.log("value is null");
  } else {
    console.log(x);
  }
}

let x = 10;
let y;
let z = null;
show(x);
show(y);
show(z);

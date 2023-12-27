function getLength2(something) {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
  // return something.length; // Property 'length' does not exist on type 'number'.
}
const a = getLength2(2);
console.log(a);

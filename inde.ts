function getLength2(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
  // return something.length; // Property 'length' does not exist on type 'number'.
}
getLength2(2);

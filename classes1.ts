export interface Shape {
  draw(): void;
}

export function drawShapes(shape: Shape): Shape {
  shape.draw();
  return shape;
}

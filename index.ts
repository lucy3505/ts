//tsc --noImplicitThis index.ts  能显示里面this的指向
class Rectangle {
  private w: number;
  private h: number;
  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
  }

  getAreaFunction() {
    return function (): number {
      return this.w * this.h;
    };
  }

  getAreaFunction2() {
    return (): number => {
      return this.w * this.h;
    };
  }
}

let rectangle: Rectangle = new Rectangle(2, 5);
//返回function
let areaFunction = rectangle.getAreaFunction();
//得到面积
//this 是指向rectangle这个对象，还是调用的上下文
let area = areaFunction();
console.log(area);

let areaFunction2 = rectangle.getAreaFunction2();
//得到面积
//this 是指向rectangle这个对象，还是调用的上下文
let area2 = areaFunction2();
console.log(area2);

class Component {
  private width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  display(): void {
    console.log("displaying");
    console.log(this.height);
  }
}
//接口继承类
//继承类的方法和属性，但可以不用实现方法
//也可以定义自己的方法
interface Widget extends Component {
  hide(): void;
}

class Button extends Component implements Widget {
  //如果没有extends Component那就要实现Component里的内容  比如写成class Button implements Widget
  hide(): void {
    console.log("hiding");
  }
  display(): void {
    console.log("ddd");
  }
}

let w: Widget = new Button(1, 2);
console.log(w);
w.display();

class Button2 implements Widget {
  //如果没有extends Component那就要实现Component里的内容  比如写成class Button implements Widget
  //Component里面是private，protected那就只能extends Component,如果是public那就能自己实现width，height
  private width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  display(): void {
    console.log("displaying");
    console.log(this.height);
  }

  hide(): void {
    console.log("hiding");
  }
}
let w2: Widget = new Button2(1, 2);
console.log(w2);
w2.display();

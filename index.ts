//模版

class Person {
  //定义了两个数据
  firstName: string; //对类型进行限制
  lastName;
}

//生成一个对象
let aPerson = new Person();
//设置firstName的内容
aPerson.firstName = "rails";
//读取 firstName的内容
console.log(aPerson.firstName);

class Movie {
  name: string;
  play_count: number;
  created_at: string;
  time: string;
  //this 指向生成的object本身
  constructor(name: string, play_count: number) {
    this.name = name;
    this.play_count = play_count;
  }
  //method 方法 可能会对数据进行操作
  display_play_count(padding: string = `******`) {
    return `${this.play_count} 次数 ${padding}`;
  }

  //对bject的数据进行操作

  increase_play_count() {
    this.play_count += 1;
  }
}

//生成一个 object
let m = new Movie("诱人的typescript", 14);
// m.name = "诱人的typescript";
console.log(m.name);
console.log(`${m.play_count} 分钟`);
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());

//interface接口
//1.对对象的形状（shape)进行描述

//2.对类(class)进行抽象

//3.Duck Typing(鸭子类型)  动态变成语言对对象的一种推断策略,更关注对象如何被使用，而不是对象类型本身

interface IPerson {
    name: string;
    age: number;
}

let viking: IPerson = {//必须符合接口的属性数量，否则波浪红
    name:"viking",
    age:20,
    gender:'22'//多属性也报错
    
}

//不想完全匹配形状，可以用可选属性
interface IPerson2 {
    name: string;
    age?: number;
}

//只读属性
interface IPerson3 {
    readonly id:number,
    name: string;
    age?: number;
}

let viking3: IPerson3 = {//必须符合接口的属性数量，否则波浪红
    id:2,
    name:"viking",
    age:20,
}
viking3.id=111//报错
//readonly用在属性上面，const是用在变量上
const  vike 


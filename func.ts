
//函数声明写法
function add(x: number,y: number,z?:number,z1=10):number {//z为可选参数，且可选后不能放确定参数，可选自能放最后，支持默认参数，默认参数自动识别为可选餐宿
    if(typeof z==='number'){
        return x + y + z
    }else{
        return x + y
    }
}

let result = add(2,3)

//函数表达式写法

const add2 = function(x: number,y: number, z?:number):number{//函数本身有输入输出类型，变量本身也有类型
    if(typeof z==='number'){
        return x + y + z
    }else{
        return x + y
    }
}

// const add2: (x: number, y: number, z?: number) => number
// add2本身也是个类型了，把鼠标放在add2上面
const add3:string = add2 //会报错，因为add2是不能赋值给string类型的
//注意=> 不是es6  而是ts中函数类型返回值的方法
//ts中，：后面都是声明类型
const add4:(x: number, y: number, z?: number) => number = add

let str = "str"//类型推论，在你没指定类型的时候会给你推论类型，上面的add2函数也是一样的
str=12//报错，已经推论为string类型

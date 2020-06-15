//数组
let arrOfNumber:number[] = [1,2,3]//不能放字符串

arrOfNumber.push(5)
arrOfNumber.push("str")//报错

function test(){
    console.log(arguments)//arguments是类数组，没有数组上的方法 arguments这个在ts里的接口是Iarguments
    arguments.length
    arguments[1]
    //没有数组上的方法
    arguments.forEach//报错
    //也不能把一个数组赋值给它
    let arr:any[] = arguments

}

//元祖:一定程度限定数据类型的数组
let user:[string,number]=['viking',1]
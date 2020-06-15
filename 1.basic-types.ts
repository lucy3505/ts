let isDone:boolean=false

let age:number = 20

let binaryNumber: number = 0b111

let firstName: string = 'viking'

let message: string = `Hello,${firstName}`

let u: undefined = undefined

let n: null = null

let num: number = 'string' //有红波浪编译的时候就会报错

let nu: number = undefined //null和undefined是所有类型的子类型

//范围很广：any
let notSure: any = 4//设置为any后返回的内容等等都为any
notSure = false
notSure.getName()

//范围没那么广：用联合类型
let numOrStr:number|string =234
numOrStr="st"



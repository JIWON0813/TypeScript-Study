//04-1

function add(a: number, b:number): number{
    return a+b
}

function print(name: string): void{
    console.log(`name is ${name}`)
}

let printMe: (string, number) => void = function(name:string,age:number):void{}

type typeFunc = (string , number) => void

let f : typeFunc = function(a:string,b:number): void{}
let g : typeFunc = function(a:number,b:number):void{}

interface IName{
    name:string
}

// undefined 확인
function getName(o: IName){
    return o != undefined ? o.name : 'unknown'
}

interface IAge{
    age?:number
}

// 선택변수일떄
function getAge(o: IAge){
    return o != undefined && o.age ? o.age : 0
}

function fn(a1:string, a2?:number):void{}

let addfn = new Function('a','b','return a+b')

let result = addfn(1,2)

console.log(result)

let ff = function(a,b) {return a+b}
ff = function(a,b) {return a - b}

let value = (function(a,b){return a+b})(2,3)

console.log(value)

const arrow1 = (a:number, b:number): number=> {return a+b}
const arrow2 = (a:number, b:number): number => a+b

const isGreater = (a:number, b:number):boolean => {
    return a> b;
}

const call = (callback: () => void): void => callback()

export const init = (callback: () => void): void =>{
    console.log('callback')
    callback()
    console.log('end call')
}

init(() => console.log('test'))

const calc = (value: number, cb: (number) => void):void =>{
    let adad = (a,b) => a+b
    function mul(a,b){return a*b}

    let result = mul(adad(2,3),value)
    cb(result)
}

calc(30, (result:number) => console.log(`result is ${result}`))

const add1 = (a: number, b:number) => a+b
const add2 = (a:number): (number)=> number => (b: number): number=> a+b

const add3 = (a:number): (number) => number => (b:number): number => a+b

const result2 = add3(1)(2)

console.log(result2)

type NumberFunc = (number) => number

export const ad2 = (a: number): NumberFunc =>{
    const _add: NumberFunc = (b: number): number =>{
        return a+b
    }
    return _add
}
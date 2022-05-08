let ob: object = {name : 'Jack', age : 32}
ob = {first:1, second:2}

interface IPerson{
    name : string
    age : number
}
let good: IPerson = {name : 'Jack', age : 32}

// let bad1: IPerson = {name:'Jack'} error 

//선택 인자 추가
interface IPerson2{
    name : string
    age : number
    etc?:boolean
}

let good1:IPerson2 = {name:'Jack', age:32}
let good2:IPerson2 = {name:'Jack', age:32, etc:true}

//익명 인터페이스
let ai:{
    name : string
    age : number
    etc?:boolean
} = {name:'Jack', age:32}

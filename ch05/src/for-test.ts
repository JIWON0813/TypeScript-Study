import {isEmpty} from './arrayLength'

const numbers2: number[] = [1,2,3,4,5]

for(let index = 0; index < numbers2.length; index++){
    const item: number = numbers2[index]
    console.log(item)
}

let array2 : number[] = [1,2,3,4,5]
let [f,s,t,...r] = array2

console.log(f,s,t,r)

let names = ['A','B','C']

for(let index in names){
    const name = names[index]
    console.log(`[${index}] : ${name}`)
}

let ob = {name : 'JACK', age : 32}

for(let property in ob){
    console.log(`${property} : ${ob[property]}`)
}

for(let name of ['Jack','ADD', 'DKW']){
    console.log(name)
}

//const arrLength = (array) => array.length

const arrLength = <T>(array: T[]):number => array.length

console.log(
    isEmpty([]),
    isEmpty([1,2])
)

const identity = <T>(n: T): T => n

console.log(
    identity<boolean>(true),
    identity(true)
)
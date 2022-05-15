import {range} from './range'

const mul = (val1, val2) => val1 * val2

let nums : number[] = [1,2,3,4,5,6,7,8,9,10]
let tempReulst = nums.filter(val => val%2 != 0).map(val => val*val).reduce(mul,1)
let result = Math.round(Math.sqrt(tempReulst))
console.log(result)

const arr : number[] = range(1,10+1)

let odds:number[] = arr.filter((value) => value %2 != 0)
let evens : number[] = arr.filter((value) => value %2 == 0)
console.log(odds, evens)

let sq : number[] = range(1,5+1).map((val : number) => val * val)
console.log(sq)

let reduceSum : number = range(1, 100+1).reduce((result : number, value : number) => result+value,0)
console.log(reduceSum)
import {range} from './range'

let arr1 : number[] = [1]
let arr2 : number[] = [2, 3]

let mergedArr : number[] = [...arr1,...arr2, 4]
console.log(mergedArr)

let numbers : number[] = range(1,9+1)
console.log(numbers)
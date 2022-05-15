import {range, fold, filter, map} from './range'

let sum = 0
for(let val = 1; val <= 100;){
    sum += val++
}
console.log(sum)

let numbers : number[] = range(1, 100+1)
console.log(numbers)

let result = fold(numbers,(result,value) => result+value,0)
console.log(result)

const isOdd = (n: number) : boolean => n%2 != 0

let resultOdd = fold(
    filter(numbers, isOdd),
    (result, value) => result+value,0)

console.log('Odd : ' + resultOdd)

let resultMap = fold(
    map(numbers, value => value * value),
    (result, value) => result+value,0)

console.log('map : ' + resultMap)
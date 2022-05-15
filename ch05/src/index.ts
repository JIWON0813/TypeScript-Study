let array = new Array
array.push(1)
array.push(2)
array.push(3)

console.log(array)

let numbers = [1,2,3]
let strings = ['Hello', 'World']
console.log(numbers,strings)

let a = [1,2,3,]
let o = {name : 'Jack', age:32}

console.log(Array.isArray(a),Array.isArray(o))

let numArr : number[] = [1,2,3]
let strArr : string[] = ['Hello','World']

type IPerson = {name : string, age? : number}
let personArr : IPerson[] = [{name : 'Jack', age:32}, {name : 'Jane', age:44}]
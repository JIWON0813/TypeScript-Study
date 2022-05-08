class Person1 {
    name : string
    age? : number
}

let jack1 : Person1 = new Person1()
jack1.name = 'Jack'
jack1.age = 32

console.log(jack1)

class Person2 {
    constructor(public name:string,public age?:number){}
}

let jack2 : Person2 = new Person2('Back',44)

console.log(jack2)

interface IPerson4{
    name:string
    age?:number
}

class Person4 implements IPerson4{
    name: string
    age: number
}

abstract class AbstractPerson5{
    abstract name:string
    constructor(public age?:number){}   
}

class Person5 extends AbstractPerson5{
    constructor(public name: string, age?:number){
        super(age)
    }
}

let jack5 : Person5 = new Person5('Jack5', 22)

console.log(jack5)

class A{
    static init = 1
}
let initval = A.init

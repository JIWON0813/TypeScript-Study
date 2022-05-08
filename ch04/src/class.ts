export class A{
    value: number = 1

    method: () => void = function(): void{
        //console.log(`value: ${this.value}`) // error?
    }
}

export class Calculator{
    constructor(public value: number = 0){}
    add(value:number){
        this.value += value
        return this
    }
    mul(value:number){
        this.value *= value
        return value
    }
}

let calc = new Calculator

// let result = calc.add(1).add(2).mul(10).value // error?

// console.log(result)

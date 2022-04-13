export function makePerson(name: string, age: number){
    return {name: name, age: age}
}
export function testMakePerson(){
    console.log(
        makePerson('jiwon', 22),
        makePerson('annie', 44)
    )
}
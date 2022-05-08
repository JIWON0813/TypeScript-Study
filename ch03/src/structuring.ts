import { IPerson,ICompany,INameable } from "./IPerson_ICompany";

let jack: IPerson = {name : 'Jack', age:33},
    jane: IPerson = {name : 'Jane', age : 22}

let apple:ICompany= {name:'Apple', age:55}

let {name,age} = jack

let obj: object = {nmae : 'JAck'}

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name

console.log(name1 , name2)
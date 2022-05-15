export const range = (from:number, to:number):number[] => 
    from < to ? [from, ...range(from+1,to)] : []

export const fold = <T>(arr: T[], callback: (result: T, val: T) => T, initValue:T) =>{
    let result : T = initValue
    for(let i = 0 ; i < arr.length; ++i){
        const value = arr[i]
        result = callback(result, value)
    }

    return result
}

export const filter = <T>(arr: T[], callback: (result: T, index?: number) => boolean) =>{
    let result : T[] = []
    for(let i: number = 0 ; i < arr.length; ++i){
        const value = arr[i]
        if(callback(value,i)){
            result = [...result,value]
        }
    }

    return result
}

export const map = <T,Q>(arr: T[], callback: (value: T, index?: number) => Q) : Q[] =>{
    let result : Q[] = []
    for(let i: number = 0 ; i < arr.length; ++i){
        const value = arr[i]
        if(callback(value,i)){
            result = [...result, callback(value,i)]
        }
    }

    return result
}


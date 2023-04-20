// A decorator example which does arithmetic without altering original values.

export interface IValue {
    value: number
}

class _Value implements IValue {
    value: number
    constructor(value: number) {
        this.value = value
    }
}

export function Value(value: number): IValue {
    return new _Value(value)
}
class _Add implements IValue {
    value: number
    constructor(val1: IValue | number, val2: IValue | number) {
        const left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? (val1 as IValue).value
            : (val1 as number)
        const right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? (val2 as IValue).value
            : (val2 as number)
        this.value = left + right
    }
}

export function Add(val1: IValue | number, val2: IValue | number): IValue {
    return new _Add(val1, val2)
}

class _Sub implements IValue {
    value: number
    constructor(val1: IValue | number, val2: IValue | number) {
        const left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? (val1 as IValue).value
            : (val1 as number)
        const right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? (val2 as IValue).value
            : (val2 as number)
        this.value = left - right
    }
}

export function Sub(val1: IValue | number, val2: IValue | number): IValue {
    return new _Sub(val1, val2)
}

// Decorator Use Case Example Code
const A = Value(1)
const B = Value(2)
const C = Value(5)

console.log(Add(A, B).value)
console.log(Add(A, 100).value)
console.log(Sub(C, A).value)
console.log(Sub(Add(C, B), A).value)
console.log(Sub(100, 101).value)
console.log(Add(Sub(Add(C, B), A), 100).value)
console.log(Sub(123, Add(C, C)).value)
console.log(Add(Sub(Add(C, 10), A), 100).value)
console.log(A.value)
console.log(B.value)
console.log(C.value)

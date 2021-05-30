// ******* TYPES IN TYPESCRIPT ********

let str: string
str = 'hiii'
// str = 2 or true - cannot do that

let num: number
num = 4
// num = 'hii' or false - cannot do that

let bool: boolean
bool = true
// bool = 'hiii' or 33 - cannot do that

let arrStr: string[]
arrStr = ['hii']
// arrStr = 'hii' or 2 or true - cannot do that

let arrBool: boolean[]
arrBool = [true]
// arrBool = ['hii', 32323] - cannot do that

let arrNum: number[]
arrNum = [2, 3, 4, 2, 13]
// arrNum = 'hii' or 32 or true - cannot do that

let arrMix: (string | number | boolean)[]
arrMix = ['hii', 323, true]
// arrMix = true or 'hii or 32 - cannot do that

let tup: [string, number]
tup = ['hi', 4]
// tup = ['hi','hi2'] or [2,3] or [3,'hi'] - cannot do that

let personObj = { name: 'tash', age: 26 }
personObj.name = 'rao'
personObj.age = 27
// personObj = {} or [] 'rao' or 23 - cannot do that

type numString = string | number
let nameNum: numString
nameNum = 'hii' || 23
// cutome type can use multiple times

// Funtions

function numSum(a: number, b: number): number {
    return a + b
    // it will return explicitly number
}

// function numSum(a: number,b: number): number {
//     return 'plused value'
//    // we cannot return other type if we explicitly defined the type
// }

function numSu2(a: number, b: number) {
    return 'plused value'
    // it will return type we return at end
}

//let numSum3: (a: number, b: number) => number
//let numSum3: (a: number, b: number, third: number) => number
let numSum3: (a: number, b: number, third?: number) => number

numSum3 = (num1: number, num2: number) => {
    return num1 + num2
}

numSum3 = (num1, num2) => {
    return num1 + num2
}

// numSum3 = (num1, num2) => {
//     return 'plused value'
// we cannot do that as we defined return type number for arrow funtion
// }

// numSum3(2, 3) it will require third argument should be pass

numSum3(2, 2)
numSum3(3, 2, 3) // now we optionally pass third argument

interface personInterface {
    name: string
    age: number
}

let tash: personInterface = {
    name: 'tash',
    age: 23,
}

// let tash: personInterface = {
//     name: 23,
//     age: 23,
//       education: 'bs'
// we cannot do that as we already define two properties for personInterface
// }

// Class methods

class Person implements personInterface {
    name: string
    age: number

    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }
    greet() {
        return `Hi my name is ${this.name} and  i am ${this.age}`
    }
}
let test = new Person('Tashfeen', 26)
console.log(test.greet())

const nameInput = document.querySelector('#name') as HTMLInputElement
const ageInput = document.querySelector('#age') as HTMLInputElement
const formSubmit = document.querySelector('form')!
const greetings = document.querySelector('.greetings') as HTMLDivElement

class Person2 implements personInterface {
    private education: string
    constructor(public name: string, public age: number) {
        this.education = 'BS Software Engineering'
    }
    greet() {
        return `Hi my name is ${this.name} and  i am ${this.age} I have completed ${this.education}`
    }
}

let test2 = new Person2('Tashfeen rao', 27)
console.log(test2.greet())
// console.log(test2.education) - we cannot do that as this is private to Person2

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    const person = new Person2(nameInput.value, ageInput.valueAsNumber)
    greetings.innerText = person.greet()
    formSubmit.reset()
})

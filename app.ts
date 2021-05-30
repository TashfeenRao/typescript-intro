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

let tup: [string,number] 
tup = ['hi',4]
// tup = ['hi','hi2'] or [2,3] or [3,'hi'] - cannot do that

let personObj = {name: 'tash', age: 26}
personObj.name = 'rao'
personObj.age = 27
// personObj = {} or [] 'rao' or 23 - cannot do that

type numString =  string | number
let nameNum: numString
nameNum = 'hii' || 23
// cutome type can use multiple times


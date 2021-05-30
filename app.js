"use strict";
// ******* TYPES IN TYPESCRIPT ********
var str;
str = 'hiii';
// str = 2 or true - cannot do that
var num;
num = 4;
// num = 'hii' or false - cannot do that
var bool;
bool = true;
// bool = 'hiii' or 33 - cannot do that
var arrStr;
arrStr = ['hii'];
// arrStr = 'hii' or 2 or true - cannot do that
var arrBool;
arrBool = [true];
// arrBool = ['hii', 32323] - cannot do that
var arrNum;
arrNum = [2, 3, 4, 2, 13];
// arrNum = 'hii' or 32 or true - cannot do that
var arrMix;
arrMix = ['hii', 323, true];
// arrMix = true or 'hii or 32 - cannot do that
var tup;
tup = ['hi', 4];
// tup = ['hi','hi2'] or [2,3] or [3,'hi'] - cannot do that
var personObj = { name: 'tash', age: 26 };
personObj.name = 'rao';
personObj.age = 27;
var nameNum;
nameNum = 'hii' || 23;
// cutome type can use multiple times
// Funtions
function numSum(a, b) {
    return a + b;
    // it will return explicitly number
}
// function numSum(a: number,b: number): number {
//     return 'plused value'
//    // we cannot return other type if we explicitly defined the type
// }
function numSu2(a, b) {
    return 'plused value';
    // it will return type we return at end
}
//let numSum3: (a: number, b: number) => number
//let numSum3: (a: number, b: number, third: number) => number
var numSum3;
numSum3 = function (num1, num2) {
    return num1 + num2;
};
numSum3 = function (num1, num2) {
    return num1 + num2;
};
// numSum3 = (num1, num2) => {
//     return 'plused value'
// we cannot do that as we defined return type number for arrow funtion
// }
// numSum3(2, 3) it will require third argument should be pass
numSum3(2, 2);
numSum3(3, 2, 3); // now we optionally pass third argument
var tash = {
    name: 'tash',
    age: 23,
};
// let tash: personInterface = {
//     name: 23,
//     age: 23,
//       education: 'bs'
// we cannot do that as we already define two properties for personInterface
// }
// Class methods
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function () {
        return "Hi my name is " + this.name + " and  i am " + this.age;
    };
    return Person;
}());
var test = new Person('Tashfeen', 26);
console.log(test.greet());
var nameInput = document.querySelector('#name');
var ageInput = document.querySelector('#age');
var formSubmit = document.querySelector('form');
var greetings = document.querySelector('.greetings');
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
        this.education = 'BS Software Engineering';
    }
    Person2.prototype.greet = function () {
        return "Hi my name is " + this.name + " and  i am " + this.age + " I have completed " + this.education;
    };
    return Person2;
}());
var test2 = new Person2('Tashfeen rao', 27);
console.log(test2.greet());
// console.log(test2.education) - we cannot do that as this is private to Person2
formSubmit.addEventListener('submit', function (e) {
    e.preventDefault();
    var person = new Person2(nameInput.value, ageInput.valueAsNumber);
    greetings.innerText = person.greet();
    formSubmit.reset();
});
function doSome(arg) {
    return arg;
}
doSome('hiii'); // it will add string type to arg
doSome(2); // it will add number type to arg
doSome('hiii');
var bookb = {
    id: 1,
    name: 'some thing',
    data: 'some randome data',
};
var bookb2 = {
    id: 1,
    name: 'some thing',
    data: 32,
};
var bookb3 = {
    id: 1,
    name: 'some thing',
    data: ['name1', 'name2'],
};
// const bookb4: book<number> = {
//     id: 1,
//     name: 'some thing',
//     data: 'hi there' we cannot do that as it is
// }
var manufacturer;
(function (manufacturer) {
    manufacturer[manufacturer["AUDI"] = 0] = "AUDI";
    manufacturer[manufacturer["TESLA"] = 1] = "TESLA";
    manufacturer[manufacturer["BMW"] = 2] = "BMW";
    manufacturer[manufacturer["VOLKSWAGON"] = 3] = "VOLKSWAGON";
    manufacturer[manufacturer["KIYA"] = 4] = "KIYA";
    manufacturer[manufacturer["TOYATA"] = 5] = "TOYATA";
})(manufacturer || (manufacturer = {}));
var myCar = {
    year: 2021,
    make: manufacturer.TESLA,
};
console.log(myCar.make);

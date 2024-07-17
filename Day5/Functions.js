//-------------------Activity 1: Function Declaration-----------------//
//Task 1:
function checkEvenOdd(number) {
    if (number%2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

checkEvenOdd(4);
checkEvenOdd(7);

//Task 2:
function square(number) {
    console.log(number*number);
}

square(5);

//-------------------Activity 2: Function Expression-----------------//
//Task 3:
const findMax = function(a, b) {
    const max = a > b ? a : b;
    console.log(`The maximum is ${max}`);
}

findMax(10, 20);

//Task 4:
const concatenateStrings = function(str1, str2) {
    console.log(str1+str2);
}

concatenateStrings("Hi, It's ", "Pratik!");

//-------------------Activity 3: Arrow Functions-----------------//
//Task 5:
const sum = (a, b) => a + b;
console.log(sum(5, 7));

//Task 6:
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("Hello", "e")); // true
console.log(containsCharacter("Pratik", "e")); // false

//-------------------Activity 4: Function Parameters and Default Values-----------------//
//Task 7:
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(7, 3)); // 21
console.log(multiply(7));    // 7

//Task 8:
function greet(name, age = 21) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet("SRK", 50);
greet("Pratik");

//-------------------Activity 5: Higher-Order Functions-----------------//
//Task 9:
function repeatFunction(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

repeatFunction(() => console.log("Hello!"), 3); //  "Hello" 3 times.

//Task 10:
const func1 = ()=>{
    console.log("Function 1");
}

const func2 = () => {
    console.log("Function 2");
}

const HigherOrderFunction2 = (func1,func2,value) =>{
    let res = 0;
    for(let i=1;i<=value;i++){
        func1();
        res += i;
    }
    for(let i = 0;i<res;i++){
        func2();
    }
}

HigherOrderFunction2(func1,func2,2)
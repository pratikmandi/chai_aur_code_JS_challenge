//-------------------Activity 1: Variable Declaration-----------------//
var num = 7;
console.log(num);

let str="Pratik";
console.log(str);

//-------------------Activity 2: Constant Declaration-----------------//
const boolval=true;
console.log(boolval);

//-------------------Activity 3: Data Types-----------------//
let newNum = 123;
console.log(typeof newNum);

let newstr = "Pratik";
console.log(typeof newstr); 

const newbool = true;
console.log(typeof newbool);

let obj = { 
    name: "Pratik",
    age: 21
};
console.log(typeof obj);

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

//-------------------Activity 4: Reassigning Variables-----------------//

let initialVal=123;
console.log(initialVal);

initialVal = 456;
console.log(initialVal);

//-------------------Activity 5: Understanding const-----------------//
const val=425;
console.log(val);

val=19;    // TypeError: Assignment to constant variable.
console.log(val);
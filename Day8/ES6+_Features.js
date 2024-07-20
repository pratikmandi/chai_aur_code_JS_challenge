//-------------------Activity 1: Template Literals-----------------//
//Task 1:
let name = "Pratik";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);

//Task 2:
let multiLineString = `This is line one
This is line two
This is line three`;
console.log(multiLineString);

//-------------------Activity 2: Destructuring-----------------//
//Task 3:
let numbers = [1, 2, 3, 4, 5];
let [first,second,...rest] = numbers;
console.log(first);
console.log(second);
console.log(...rest);

//Task 4:
let book = { 
    title: "The Inheritance of Loss", 
    author: "Kiran Desai" 
};
let { title, author } = book;
console.log("Title :",title);
console.log("Author :",author);

//-------------------Activity 3: Spread and Rest Operators-----------------//
//Task 5:
let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

//Task 6:
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  console.log(sum(4,2,5));  

//-------------------Activity 4: Default Parameters-----------------//
//Task 7:
function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5, 2)); // 10
  console.log(multiply(5));    // 5
  
//-------------------Activity 5: Enhanced Object Literals-----------------//
//Task 8:
let methodsAndProperties = {
    name: "Pratik",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  console.log(methodsAndProperties);
  methodsAndProperties.greet(); 

//Task 9:
let propName = "age";
let obj = {
  [propName]: 21,
  name: "Pratik"
};
console.log(obj);

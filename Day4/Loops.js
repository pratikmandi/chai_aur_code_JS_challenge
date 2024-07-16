//-------------------Activity 1: For Loop-----------------//
//Task 1:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2:
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//-------------------Activity 2: While Loop-----------------//
//Task 3:
let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log(`The sum of numbers from 1 to 10 is: ${sum}`);

//Task 4:
let n = 10;

while (n>0) {
    console.log(n);
    n--;
}

//-------------------Activity 3: Do-While Loop-----------------//
//Task 5:
let newNum = 1;
do {
    console.log(newNum);
    newNum++;
} while (newNum <= 5);

//Task 6:
function factorial(n) {
    let result = 1;

    do {
        if (n === 0 || n === 1) break;
        result *= n;
        n--;
    } while (n > 0);

    console.log(result);
}

factorial(5);

//-------------------Activity 4: Nested Loops-----------------//
//Task 7:
for(let i=1; i<=5; i++){
    let str = '';
    for(let j=1; j<=i; j++){
       str += '* ';
    }
    console.log(str);
}

//-------------------Activity 5: Loop-Control Statements-----------------//
//Task 8:
for(let i=1; i<=10; i++){
    if(i == 5) continue;
    console.log(i);
}

//Task 9:
for(let i=1; i<=10; i++){
    if(i==7) break;
    console.log(i);
}
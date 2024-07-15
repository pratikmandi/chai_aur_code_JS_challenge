//-------------------Activity 1: If-Else Statements-----------------//
//Task 1:
let num = 7;    //Thala for a reason.
if(num > 0) console.log(`${num} is greater than 0.`);
    else if(num < 0) console.log(`${num} is less than 0.`);
    else console.log("ZERO");

//Task 2:
let age = 21;
if(age>=18) console.log("You can vote!");
else console.log("You are not eligible to vote.");

//-------------------Activity 2: Nested If-Else Statements-----------------//
//Task 3:
let n1 = 5;
let n2 = 6;
let n3 = 7;

if(n1 >= n2) {
    if(n1 >= n3) 
        console.log(`${n1} is largest number.`);
    else 
        console.log(`${n3} is largest number.`);
} else {
    if(n2 >= n3)
        console.log(`${n2} is largest number.`); 
    else
        console.log(`${n3} is largest number.`); 
}

//-------------------Activity 3: Switch Case-----------------//
//Task 4:
function getDay(number) {
    let day;

    switch(number) {
        case 1: 
            day= 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default: 
            day = 'Invalid';
    }

    console.log(day);
}

getDay(2);

//Task 5:
function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 50 && score < 60):
            grade = 'E';
            break;
        case (score >= 0 && score < 50):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    console.log(grade);
}

getGrade(70);

//-------------------Activity 4: Conditional Ternary Operator-----------------//
//Task 6:
function evenOdd(num){

    let ans= num % 2==1 ? `${num} is Odd.` : `${num} is Even.`
    console.log(ans);
}

evenOdd(9);

//-------------------Activity 5: Combining Conditions-----------------//
//Task 7:
function isLeapYear(year) {
    let isLeap;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true;
            } else {
                isLeap = false;
            }
        } else {
            isLeap = true;
        }
    } else {
        isLeap = false;
    }

    console.log(isLeap ? `${year} is a leap year` : `${year} is not a leap year`);
}

isLeapYear(2000); // "2000 is a leap year"
isLeapYear(2003); // "2003 is not a leap year"
isLeapYear(2024); // "2024 is a leap year"

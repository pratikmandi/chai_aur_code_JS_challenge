//-------------------Activity 1: Object Creation and Access-----------------//
//Task 1:
let book = {
    title: "Digital Design",
    author: "M. Morris Mano",
    year: 1984
};

console.log(book);

//Task 2:
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);

//-------------------Activity 2: Object Methods-----------------//
//Task 3:
book.getTitleAndAuthor = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getTitleAndAuthor());

//Task 4:
book.updateYear = function(newYear) {
    this.year = newYear;
};

book.updateYear(2013);
console.log(book);

//-------------------Activity 3: Nested Objects-----------------//
//Task 5:
let library = {
    name: "Pratik's Library",
    books: [
        {
            title: "Digital Design",
            author: "M. Morris Mano",
            year: 1984
        },
        {
            title: "Engineering Electromagnetics",
            author: "William H. Hayt, Jr.",
            year: 1989
        },
        {
            title: "Utopia",
            author: "Thomas More",
            year: 1516
        }
    ]
};

console.log(library);

//Task 6:
console.log(`Library Name: ${library.name}`);
library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});

//-------------------Activity 4: The this Keyword-----------------//
//Task 7:
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};

console.log(book.getTitleAndYear());


//-------------------Activity 5: Object Iteration-----------------//
//Task 8:
for (let prop in book) {
    if (book.hasOwnProperty(prop)) {
        console.log(`${prop}: ${book[prop]}`);
    }
}

//Task 9:
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

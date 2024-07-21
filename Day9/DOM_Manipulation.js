//-------------------Activity 1: Selecting and Manipulating Elements-----------------//
// Task 1: Select an HTML element by its ID and change its text content
document.getElementById("myElementId").textContent = "New Text Content";

// Task 2: Select an HTML element by its class and change its background color
document.querySelector(".myElementClass").style.backgroundColor = "lightblue";

//-------------------Activity 2: Creating and Appending Elements-----------------//
// Task 3: Create a new div element with some text content and append it to the body
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element.";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
let newListItem = document.createElement("li");
newListItem.textContent = "This is a new list item.";
document.querySelector("ul").appendChild(newListItem);

//-------------------Activity 3: Removing Elements-----------------//
// Task 5: Select an HTML element and remove it from the DOM
let elementToRemove = document.getElementById("elementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element
let parentElement = document.getElementById("parentElementId");
parentElement.removeChild(parentElement.lastElementChild);

//-------------------Activity 4: Modifying Attributes and Classes-----------------//
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
document.getElementById("myImage").setAttribute("src", "Javascript.jpg");

// Task 8: Add and remove a CSS class to/from an HTML element
let element = document.getElementById("myElement");
element.classList.add("newClass");
element.classList.remove("oldClass");

//-------------------Activity 5: Event Handling-----------------//
// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myParagraph").textContent = "The text content has been changed!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color
document.getElementById("myElement").addEventListener("mousoever", function() {
    this.style.borderColor = "red";
});

//Accessing the children elements

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// let collect = console.log(document.body.childNodes)
// console.log(typeof collect)
// console.log(document.body.childNodes[0])
// console.log(document.body.childNodes[document.body.childNodes.length - 1])
// console.log(document.body.hasChildNodes());

// making array from HTML collection

// let arr = Array.from(document.body.childNodes)
// console.log(arr)
// console.log(typeof arr)

// // accessing the siblings and parents

// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.firstElementChild.nextSibling)
// console.log(document.documentElement.parentNode) // return the parent node
// console.log(document.documentElement.parentElement) // return parent tag
// console.log(document.getElementByClassName = "first");


// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);

// using js functions to change style of elements
// const changeBodyRed = () => {
//   document.body.firstElementChild.style.background = "red";
//   document.body.firstElementChild.style.color = "white";
// }
// changeBodyRed();

// Table Navigation
// let t = document.body.firstElementChild.firstElementChild;
// console.log(t);
// console.log(t.rows);
// console.log(t.caption);
// console.log(t.tHead);
// console.log(t.tFoot);
// console.log(t.tBodies);
// console.log(t.rows[0].rowIndex);
// console.log(t.rows[1].rowIndex);
// console.log(t.rows[2].rowIndex);
// console.log(t.rows.sectionRowIndex);

// Searching the DOM

//1. getElementByID : it will be only single element coz ID is unique
let home = document.getElementById("Home");
home.style.color = "red";

let cardtext = document.getElementsByClassName("card-text");
cardtext[0].style.color = "pink",
cardtext[0].style.background = "black";
cardtext[1].style.color = "white";
cardtext[1].style.background = "black";
cardtext[2].style.color = "yellow";
cardtext[2].style.background = "black";
cardtext[3].style.color = "cyan";
cardtext[3].style.background = "black";

// 2. querySelectorAll : it will be collection of elements with that perticular class
let ctitles = (document.querySelectorAll(".card-title"));
ctitles[0].style.color = "red";
ctitles[1].style.color = "blue";
ctitles[2].style.color = "green";
ctitles[3].style.color = "orange";

document.querySelector(".this").style.background = "yellow";
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"));

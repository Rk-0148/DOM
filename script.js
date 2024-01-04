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
let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tFoot);
console.log(t.tBodies);
console.log(t.rows[0].rowIndex);
console.log(t.rows[1].rowIndex);
console.log(t.rows[2].rowIndex);
console.log(t.rows.sectionRowIndex);
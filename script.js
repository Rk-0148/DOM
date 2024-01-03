//Accessing the children elements
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// let collect = console.log(document.body.childNodes)
// console.log(typeof collect)
// console.log(document.body.childNodes[0])
// console.log(document.body.childNodes[document.body.childNodes.length - 1])
// console.log(document.body.hasChildNodes());

// let arr = Array.from(document.body.childNodes)
// console.log(arr)
// console.log(typeof arr)

// // accessing the siblings and parents
console.log(document.body.firstChild)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.nextSibling)
console.log(document.documentElement.parentNode) // return the parent node
console.log(document.documentElement.parentElement) // return parent tag
console.log(document.getElementByClassName = "first");


// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);

const changeBodyRed = () => {
  document.body.firstElementChild.style.background = "red";
  document.body.firstElementChild.style.color = "white";
}
changeBodyRed();
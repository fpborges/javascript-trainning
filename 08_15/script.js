/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

//forEach() array method
stuff.forEach((item) => {
	let listItem = document.createElement("li");
	listItem.innerHTML = item;
	stuffList.append(listItem);
});

const mapList = stuff.map((item) => {
	let currentList = document.createElement("li");
	currentList.innerHTML = item;
	return currentList;
});

mapList.forEach((item) => {
	stuffList.appendChild(item);
});

console.log(stuffList);

// for (let i = 0; i < stuff.length; i++) {
// 	let list = document.createElement("li");
// 	list.innerHTML = stuff[i];
// 	stuffList.appendChild(list);
// }

article.append(stuffList);

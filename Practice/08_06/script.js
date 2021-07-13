/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

//Set target element
const mainPoint = document.querySelector("main");

//create button element
const button = document.createElement("button");

//declare button object
const btn = {
	attr: "class",
	attrName: "eventButton",
	btnText: "Add Paragraph",
};

button.innerHTML = btn.btnText;

button.setAttribute(btn.attr, btn.attrName);

mainPoint.append(button);

function addParagraph() {
	let obj = {
		size: 23,
		color: "green",
		type: "toy",
	};

	let content = `This is a content from function. The object has size: ${obj.size} color: ${obj.color} and type: ${obj.type}.`;

	mainPoint.innerHTML += content;
}

button.addEventListener("click", () => {
	return addParagraph();
});

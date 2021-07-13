/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const cells = document.querySelectorAll(".cell");
const buttonTheme = document.querySelector(".theme");
const body = document.body;

buttonTheme.addEventListener(
	"click",
	() => {
		body.style.backgroundColor === ""
			? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
			: (body.style.backgroundColor = "");
	},
	false
);

cells.forEach((cell) => {
	cell.addEventListener(
		"mouseenter",
		() => {
			cell.style.backgroundColor = "blue";
		},
		false
	);
	cell.addEventListener(
		"mouseleave",
		() => {
			cell.style.backgroundColor = "";
		},
		false
	);
	cell.addEventListener(
		"click",
		() => {
			alertEvent();
		},
		false
	);
});

function alertEvent() {
	alert("this is an alert!");
}

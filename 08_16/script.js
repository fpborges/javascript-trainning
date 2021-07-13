/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
// import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

const content = backpackObjectArray.map((element) => {
	let pack = document.createElement("article");
	pack.classList.add("backpack");

	pack.setAttribute("id", element.id);

	pack.innerHTML = `
    <figure class="backpack__image">
      <img src=${element.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${element.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
				element.volume
			}l</span></li>
      <li class="feature backpack__color">Color:<span> ${
				element.color
			}</span></li>
      <li class="feature backpack__age">Age:<span> ${element.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
				element.pocketNum
			}</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
				element.strapLength.left
			} inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
				element.strapLength.right
			} inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
				element.lidOpen ? "open" : "closed"
			}</span></li>
    </ul>
  `;

	return pack;
});

// Get the main
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article.
content.forEach((backpack) => {
	main.append(backpack);
});

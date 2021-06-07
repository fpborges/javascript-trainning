/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const rpgBook = new Book(
  "Lord of the Rings",
  "J.J.Tolkien",
  "rpg",
  32,
  2500,
  0
);

console.log("rpg book before: ", rpgBook);
console.log("rpg book before: ", rpgBook.price);
console.log("rpg book before: ", rpgBook["selling"]);

rpgBook.changePrice(55);
rpgBook.updateSelling(500000);

console.log("rpg book after: ", rpgBook);

// Declare number of books
const numberOfBooks = 5;
let books = [];

for (let index = 0; index < numberOfBooks; index++) {
  let lordOfTheRings = new Book(
    "Lord of the Rings",
    "J.J.Tolkien",
    "rpg",
    32,
    2500,
    0
  );
  books.push(lordOfTheRings);
}

books.forEach((element) => {
  console.log(element);
});

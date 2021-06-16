/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection.push("test");
collection.forEach((element) => {
  if (typeof element === "boolean") {
    console.log(element);
  }
});

console.log(collection.length);

console.log(collection);

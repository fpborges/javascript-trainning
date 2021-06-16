/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// const changeColor = document
//   .querySelectorAll("backpack__features li")
//   .forEach((element) => {
//     element.style.backgroundColor = "blue";
//   });

// const test = document.querySelectorAll(".backpack__name").forEach((item) => {
//   item.style.backgroundColor = "green";
// });

const changeColor = function () {
  let newColor = document.getElementById("colorText").value;
  return document
    .querySelectorAll(".backpack__name")
    .forEach((item) => (item.style.backgroundColor = newColor));
};

document.getElementById("clickMe").onclick = changeColor;

// document.getElementById("clickMe").onclick = function () {
//   alert("hello!");
// };

// console.log(test);

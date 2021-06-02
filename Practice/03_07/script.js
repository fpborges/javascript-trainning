/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const gameConsole = {
  name: "PlayStation",
  age: 3,
  type: "ps4",
  weightInKg: 5,
  storageInMB: 1000,
  controller: {
    buttons: 8,
    directionals: 2,
    wireless: true,
  },
  virtualReality: {
    bastons: 2,
    wireless: false,
  },
};

console.log(gameConsole);

console.log(
  "console ",
  gameConsole["name"],
  " controller: ",
  gameConsole.controller
);

if (gameConsole.controller.wireless) {
  console.log("PS4 tem controle wifi!");
}

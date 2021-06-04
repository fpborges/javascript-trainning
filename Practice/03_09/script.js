/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeAttr: function (newName, vol, col, pocket) {
    this.name = newName;
    this.volume = vol;
    this.color = col;
    this.pocketNum = pocket;
  },
};

console.log(
  "backpack old values: ",
  backpack.name,
  "\n",
  backpack.volume,
  "\n",
  backpack.color,
  "\n",
  backpack.pocketNum
);

// run method using new changes
backpack.changeAttr("Bad Boy", 40, "black", 35);

console.log(
  "backpack new values: ",
  backpack.name,
  "/n",
  backpack.volume,
  "/n",
  backpack.color,
  "/m",
  backpack.pocketNum
);

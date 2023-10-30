/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Mobile from "./Mobile.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const newMobile = new Mobile (
  14, 
  "iPhone", 
  5000, 
  "gray", 
  13,
  4
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Your new Mobile is an: " + newMobile.brand + " " + newMobile.model + ", " + newMobile.batterySize + "Mhz, ");


// const newPhone = newMobile.newModel("Android");
// console.log("Your new phone is: " + newPhone);

const iPhone = new Mobile (15, "iPhone", 6300, "black", 15, 4);
console.log(iPhone);

iPhone.changeModel(14);
console.log(iPhone);
iPhone.changeBrand("Android");
iPhone.changeModel("Xiaomi");
console.log(iPhone.brand);



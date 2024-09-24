// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 4);
let plate = makePottery("plate", 6, 1);
let cup = makePottery("cup", 3, 5);
let platter = makePottery("platter", 8, 2);
let vase = makePottery("vase", 9, 9);

// Fire each piece of pottery in the kiln
let mugFired = firePottery(mug, 2300);
let plateFired = firePottery(plate, 2100);
let cupFired = firePottery(cup, 2150);
let platterFired = firePottery(platter, 2400);
let vaseFired = firePottery(vase, 2000);

// Determine which ones should be sold, and their price
toSellOrNotToSell(mugFired);
toSellOrNotToSell(plateFired);
toSellOrNotToSell(cupFired);
toSellOrNotToSell(platterFired);
toSellOrNotToSell(vaseFired);

// Invoke the component function that renders the HTML list
const potteryListHTML = PotteryList();
document.querySelector(".potteryList").innerHTML = potteryListHTML;
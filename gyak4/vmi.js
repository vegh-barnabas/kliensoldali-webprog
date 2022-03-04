const a = 12;
console.log(a);

console.log(("b" + "a" + +"🍌" + "a").toLowerCase());

// const cowsay = require("cowsay");
import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

import { add } from "./math.js";

console.log(add(2, 3));

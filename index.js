const { addtoCart } = require("./cartModule");

console.log("Welcome to js ");
console.log(10 + 40);
let l = [10, 20, 30, 40, 50];
l.forEach((value, index) => {
  console.log(value.index);
});
console.log(addtoCart());

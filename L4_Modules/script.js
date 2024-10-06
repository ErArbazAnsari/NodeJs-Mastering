// const math = require("./math");
// Or
const { addfn, subfn, mulfn, sayHelloFromMath } = require("./math.js");
const myFunctions = require("./anotherWay.js");
// console.log("Value of math:", math);
// console.log("add Function:", math.addfun(10, 20));
// console.log("sub Function:", math.subfun(10, 20));
// console.log("mul Function:", math.mul(10, 20));

console.log("add Function:", addfn(10, 20));
console.log("sub Function:", subfn(10, 20));
console.log("mul Function:", mulfn(10, 20));

console.log("\n", myFunctions);
console.log(myFunctions.add(10, 20));
console.log(myFunctions.sub(20, 10));
console.log(myFunctions.mul(20, 490));

console.log(sayHelloFromMath());

console.log("\n\n");
console.log(addfn, subfn, mulfn, sayHelloFromMath);

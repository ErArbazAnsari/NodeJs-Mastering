const { log } = require("console");
const fs = require("fs");
const os = require("os");

// blocking...  Request
// console.log("1");
// const result = fs.readFileSync("./L6_NodeJs_Working/contact.txt", "utf-8");
// console.log(result);
// console.log("2");

// Default thread pool size -> 4
// Max -> max of cpu core
console.log("My CPU Cores:", os.cpus().length, "\n\n");

// non-blocking... Request
console.log("1");
const result = fs.readFile(
    "./L6_NodeJs_Working/contact.txt",
    "utf-8",
    (err, result) => {
        console.log(result);
    }
);
console.log("2");

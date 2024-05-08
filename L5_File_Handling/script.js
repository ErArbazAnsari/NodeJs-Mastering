const fs = require("fs"); // fs is built in module in javascript

console.log(fs);

// ***************************************
//sync
fs.writeFileSync(
    "./L5_File_Handling/myData.txt",
    "Hi, Arbaz this is javaScript"
);
const data = fs.readFileSync("./L5_File_Handling/myData.txt");
console.log(data);
console.log(data.toString());

// ***************************************
//async
fs.writeFile(
    "./L5_File_Handling/asyncData.txt",
    "This data is write by async",
    (err) => {
        // console.log(err);
    }
);

// ***************************************
// Reading files -> sync
const result = fs.readFileSync("./L5_File_Handling/contact.txt", "utf-8");
console.log("\nData Reading sync");
console.log(result);

// ***************************************
// Reading files -> async // Not return anything
fs.readFile("./L5_File_Handling/contact.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error Found:", err);
    } else {
        console.log("\nData Reading Async");
        console.log(data);
    }
});

// ***************************************
// appending files -> sync
fs.appendFileSync(
    "./L5_File_Handling/contact.txt",
    new Date().getTime().toString()
);

// ***************************************
// copying a file
fs.cpSync("./L5_File_Handling/contact.txt", "./L5_File_Handling/myNewData.txt");

// ***************************************
// deleting a file
fs.unlinkSync("./L5_File_Handling/myNewData.txt");

// ***************************************
// statsync to get info of a file
console.log(fs.statSync("./L5_File_Handling/contact.txt"));

// making directory
fs.mkdirSync("./L5_File_Handling/Content NewData YesData", (recursive = true));

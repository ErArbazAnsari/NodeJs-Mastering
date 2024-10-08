const http = require("http");

// let counter = 0;
// const myServer = http.createServer((req, res) => {
//     console.log("New Request Received", "Request No.", counter++);
//     console.log(req);
//     res.end(`Hi! from jsServer.`);
// });

// myServer.listen(8000, () => {
//     console.log("Server Started Successfully!");
// });

//Making Log
let counter = 0;
const fs = require("fs");
const res = require("express/lib/response");

const myServer = http.createServer((req, res) => {
    if (req.url == "favicon.ico") {
        return res.end();
    }
    const log = `${Date.now()} New Request Received, RequestId -> ${(counter += 1)}\n`;
    fs.appendFile("./L7_HTTP_Web_Server/myLog.txt", log, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end("Request Received");
        }
    });
});

myServer.listen(8001, () => {
    console.log("Server is Connect Successfully");
});

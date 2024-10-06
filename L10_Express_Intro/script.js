const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 3000;

// api code for home route
app.get("/", (req, res) => {
    fs.appendFile(
        `./appLog.txt`,
        `New Request is received ${Date.now()} -> request from: ${req.url}\n`,
        (err, data) => {
            if (err) {
                console.log(err);
            }
            res.end("Hi, there you are on the home page.");
        }
    );
});

// api code for /about route
app.get("/about", (req, res) => {
    fs.appendFile(
        `./appLog.txt`,
        `New Request is received ${Date.now()} -> request from: ${req.url}\n`,
        (err, data) => {
            if (err) {
                console.log(err);
            }
            res.end("Hi, there you are on the about page.");
        }
    );
});

app.listen(PORT, () => {
    return console.log(`You're connect to server on PORT: ${PORT}`);
});

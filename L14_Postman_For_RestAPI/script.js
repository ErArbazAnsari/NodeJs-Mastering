const express = require("express");
const app = express();
const users = require("./dummy-data/users.json");
const fs = require("fs");

const PORT = 3000;
// middleware
app.use(express.urlencoded());

// routes
app.get("/", (req, res) => {
    return res.send("Hello from server.");
});

app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:userId", (req, res) => {
    const id = Number(req.params.userId);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users/", (req, res) => {
    const body = req.body;

    users.push({ id: users.length + 1, ...body });
    fs.writeFile("./dummy-data/users.json", JSON.stringify(users), (err) => {
        if (err) {
            console.log(err);
        }
    });

    return res.send("user created");
});

app.delete("/api/users/:id", (req, res) => {
    const userid = Number(req.params.id);
    const latestData = users.filter((user) => user.id !== userid);
    console.log(latestData);
    fs.writeFile(
        "./dummy-data/users.json",
        JSON.stringify(latestData),
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
    res.status(200).json({
        message: "User deleted successfully",
    });
});

app.path("/api/users/:id", (req, res) => {
    const userid = Number(req.params.id);
    const newUserInfo = req.body;
    const oldData = users.map((user) => user.id === userid);
    console.log(newUserInfo);
    console.log(oldData);
    // fs.writeFile(
    //     "./dummy-data/users.json",
    //     JSON.stringify(latestData),
    //     (err) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //     }
    // );
    // res.status(200).json({
    //     message: "User deleted successfully",
    // });
});

// listening my server
app.listen(PORT, () => {
    console.log(`Server is running...`);
});

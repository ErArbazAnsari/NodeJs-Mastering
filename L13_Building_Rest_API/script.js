const express = require("express");
const app = express();
const users = require("./dummy-data/users.json");

const PORT = 3000;

// routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:userId", (req, res) => {
    const id = Number(req.params.userId);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

// listening my server
app.listen(PORT, () => {
    console.log(`Server is running...`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require("fs");
const { type } = require("os");
const { timeStamp } = require("console");

const PORT = 3000;

/* --------------------------- mongodb connection --------------------------- */
mongoose
    .connect("mongodb://127.0.0.1:27017/Arbaz_Ansari")
    .then(console.log("mongodb database is connected successfully!"))
    .catch((err) => console.log(err));

/* ------------------------- mongodb schema creation ------------------------ */
const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, require: true },
        lastName: { type: String, require: false },
        email: { type: String, require: true, unique: true },
        jobTitle: { type: String, require: false },
    },
    { timestamps: true }
);

/* ------------------------ create mongodb collection ----------------------- */
const User = mongoose.model("user", userSchema);

/* ------------------------------ middleware ----------------------------- */
app.use(express.urlencoded({ extended: false }));

/* ------------------------------- all routes ------------------------------- */

// get hello msg from server
app.get("/", (req, res) => {
    return res.send("Hello from server.");
});

// get all users
app.get("/api/users", async (req, res) => {
    const dbUsers = await User.find();
    if (!dbUsers)
        res.status(404).json({ msg: "users not found, please create one" });

    return res.status(200).json(dbUsers);
});

// get single user details by id
app.get("/api/users/:userId", async (req, res) => {
    const id = req.params.userId;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ msg: "user detail not found" });

    return res.status(200).json(user);
});

app.post("/api/users/", async (req, res) => {
    const body = req.body;
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
    });

    return res.status(200).json({ msg: "userCreated" });
});

app.delete("/api/users/:id", async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);

    res.status(200).json({
        msg: "User deleted successfully",
    });
});

app.patch("/api/users/:id", async (req, res) => {
    const id = req.params.userId;
    await User.findByIdAndUpdate(id, { firstName: "changed" });
    return res.status(201).json({ msg: "details updated" });
});

// listening my server
app.listen(PORT, () => {
    console.log(`Server is running...`);
});

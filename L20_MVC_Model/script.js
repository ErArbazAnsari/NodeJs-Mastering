const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");

const PORT = 3000;

/* ------------------------------ DB Connection ----------------------------- */
connectMongoDB("mongodb://127.0.0.1:27017/Arbaz_Ansari");

/* ------------------------------ middleware ----------------------------- */
app.use(express.urlencoded({ extended: false }));

/* --------------------------------- routes --------------------------------- */
app.use("/api/users", userRouter);

// listening my server
app.listen(PORT, () => {
    console.log(`Server is running...`);
});

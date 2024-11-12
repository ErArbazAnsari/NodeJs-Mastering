const express = require("express");
const urlRoute = require("./routes/url");
const dotenv = require("dotenv"); // Import dotenv for environment variables
const connectDB = require("./db/connection");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");
dotenv.config(); // Load environment variables
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectDB(databaseUrl);

// Routes
app.use("/url", urlRoute);
app.use("/", staticRoute);
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true } // Ensure you return the updated document
    );

    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("URL not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

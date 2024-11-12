const express = require("express");
const urlRoute = require("./routes/url");
const dotenv = require("dotenv"); // Import dotenv for environment variables
const connectDB = require("./db/connection");
const URL = require("./models/url");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

connectDB(databaseUrl);

// Routes
app.use("/url", urlRoute);

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

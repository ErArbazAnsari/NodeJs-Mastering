const express = require("express");
const app = express();
require("dotenv").config(); // to use this -> process.env.URL

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    return console.log(`Server is running on PORT:${PORT}`);
});

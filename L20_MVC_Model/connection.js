const mongoose = require("mongoose");

async function connectMongoDB(url) {
    return mongoose
        .connect(url)
        .then(console.log("mongodb database is connected successfully!"))
        .catch((err) => console.log(err));
}

module.exports = {
    connectMongoDB,
};

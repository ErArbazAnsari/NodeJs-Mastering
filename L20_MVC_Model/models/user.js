const mongoose = require("mongoose");

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

module.exports = User;

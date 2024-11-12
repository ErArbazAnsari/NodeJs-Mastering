const User = require("../models/user");

// getAllUserDetails
const getAllUserDetails = async (req, res) => {
    const dbUsers = await User.find();
    if (!dbUsers)
        res.status(404).json({ msg: "users not found, please create one" });

    return res.status(200).json(dbUsers);
};

// getSingleUserDetails
const getSingleUserDetails = async (req, res) => {
    const id = req.params.userId;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ msg: "user detail not found" });

    return res.status(200).json(user);
};

// createNewUser
const createNewUser = async (req, res) => {
    const body = req.body;
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
    });

    return res.status(200).json({ msg: "userCreated" });
};

// deleteSingleUser
const deleteSingleUser = async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);

    res.status(200).json({
        msg: "User deleted successfully",
    });
};

// updateUserDetails
const updateUserDetails = async (req, res) => {
    const id = req.params.userId;
    await User.findByIdAndUpdate(id, { firstName: "changed" });
    return res.status(201).json({ msg: "details updated" });
};

module.exports = {
    myFunctions: {
        getAllUserDetails,
        getSingleUserDetails,
        createNewUser,
        deleteSingleUser,
        updateUserDetails,
    },
};

const express = require("express");
const router = express.Router();
const { myFunctions } = require("../controllers/user");

/* ------------------------------- all routes ------------------------------- */
// get all users
router.get("/", myFunctions.getAllUserDetails);

// get single user details
router.get("/:userId", myFunctions.getSingleUserDetails);

// create new user
router.post("/", myFunctions.createNewUser);

// deleteSingleUser
router.delete("/:id", myFunctions.deleteSingleUser);

// updateUserDetails
router.patch("/:id", myFunctions.updateUserDetails);

module.exports = router;

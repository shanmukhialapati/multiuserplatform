const express = require("express");
const { Signups, Logins } = require("../controllers/Signupcontroller");

const router = express.Router();
router.post("/Signup", Signups);
router.post("/Login", Logins);
module.exports = router;
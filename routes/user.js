const express = require('express');
const { handleUserSignUp, renderHomePage, renderLoginPage, renderSignUpPage, handleUserLogin } = require('../controllers/user.controllers.js');

const router = express.Router();

router.post("/signup", handleUserSignUp); // Route to handle user signup
router.get("/", renderHomePage); // Route to render home page
router.get("/login", renderLoginPage); // Route to render login page
router.get("/signup", renderSignUpPage); // Route to render signup page
router.post("/login", handleUserLogin); // Route to handle user login


module.exports = router;
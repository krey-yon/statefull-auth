const User = require("../models/user.model.js");

async function handleUserSignUp(req, res) {
    try {
        const { username, email, password } = req.body;
        await User.create({
            username,
            email,
            password, 
            });
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(400).send(error);
    }
}

async function handleUserLogin(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User logged in successfully" });
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const sayHelloWorld = (req, res) => {
    res.status(200).send("Hello, World!");
};

const renderHomePage = (req, res) => {
    res.render("home");
};

const renderLoginPage = (req, res) => {
    res.render("login");
};

const renderSignUpPage = (req, res) => {
    res.render("signup");
};

module.exports = {
    handleUserSignUp,
    sayHelloWorld,
    renderHomePage,
    renderLoginPage,
    renderSignUpPage,
    handleUserLogin,
};
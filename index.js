const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser')
const { connectToMongoDB } = require("./connect");
const { restrictToLoggedInUserOnly } = require('./middlewares/auth.js')

const app = express();
const PORT = 3000;

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", require("./routes/user"));
app.use("/home",restrictToLoggedInUserOnly , require("./routes/user"));

//connecting to mongodb
connectToMongoDB(process.env.MONGODB ?? "mongodb://localhost:27017/auth").then(() =>
    console.log("Mongodb connected")
  );

//ejs files can read public css files
app.use(express.static(path.join(__dirname, "public")));


//setting up the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));  


app.listen(PORT, () =>
    console.log(`Server Started at PORT:${PORT}`)
);
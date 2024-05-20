const express = require("express");
const userRouter = require("./user-auth")
const { connectToDb } = require("./db");

const port = 3100;
const app = express();

// Connection to database
connectToDb();

//Body parser middleware
app.use(express.json());

// Routes
app.use("/", userRouter);

app.get("/", (req, res) => {
    res.status(200).send("Hello registration");
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

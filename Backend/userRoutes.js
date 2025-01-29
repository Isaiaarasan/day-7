
const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" }
];

router.get("/", (req, res) => {
    res.json(users);
});

module.exports = router;

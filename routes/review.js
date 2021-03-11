const express = require("express");
const router = express.Router();

const client = require("../database");

router.get("/", async (req, res, next) => {
  const result = await client.query("SELECT * FROM answers");
  res.render("review", {
    submissions: result.rows,
    question1: process.env.QUESTION1 || "Keine Frage konfiguriert.",
    question2: process.env.QUESTION2 || "Keine Frage konfiguriert.",
    question3: process.env.QUESTION3 || "Keine Frage konfiguriert.",
  });
});

module.exports = router;

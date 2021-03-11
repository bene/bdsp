const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    question1: process.env.QUESTION1 || "Keine Frage konfiguriert.",
    question2: process.env.QUESTION2 || "Keine Frage konfiguriert.",
    question3: process.env.QUESTION3 || "Keine Frage konfiguriert.",
  });
});

module.exports = router;

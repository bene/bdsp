const express = require("express");
const router = express.Router();

const client = require("../database");

router.post("/", async (req, res, next) => {
  const { name, answer1, answer2, answer3 } = req.body;

  try {
    await client.query(
      "INSERT INTO answers (name, answer1, answer2, answer3) VALUES ($1, $2, $3, $4)",
      [name, answer1, answer2, answer3]
    );
    res.render("success", { name });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

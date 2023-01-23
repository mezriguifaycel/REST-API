const express = require("express");
const user2 = require("../Models/UserSchema.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const NewUser = await user.create(req.body);
  res.json(NewUser);
});

module.exports = router;

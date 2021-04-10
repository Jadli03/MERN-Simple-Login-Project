const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const router = express.Router();
const authenticate = require('../middleware/authenticate');
router.get("/", (req, res) => {
  res.send("hello from the server");
});

router.post("/signup", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.json({ message: "Email is Taken" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "signup successfull" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({
        message: "email or password not matching",
      });
    }

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "email or password not matching" });
    }

      const token = await userExists.generateAuthToken();
      res.cookie("mern",token, {
        expires: new Date(Date.now()+25892000000),
        httpOnly: true
      });
    res.json({ message: "login sucessfull" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

router.get("/profile",authenticate, (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;

const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { auth } = require("../Middleware/auth.middleware");

// --------------->>>>>>>> User Registration <<<<<<<<-------------------

userRouter.post("/register", async (req, res) => {
  const { email } = req.body;
  const useremailfound = await UserModel.find({ email });

  if (useremailfound.length === 0) {
    try {
      const { firstname, lastname, email, password } = req.body;
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = new UserModel({
          firstname,
          lastname,
          email,
          password: hash,
        });
        await user.save();
        res.status(200).send("Registration Successful !!");
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else if (useremailfound.length >= 1) {
    res.status(400).send("An account has already been registered with same emailId !!");
  }
});

// --------------->>>>>>>> User Login <<<<<<<<-------------------

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    user.length > 0
      ? bcrypt.compare(password, user[0].password, (err, result) => {
          result === true
            ? res.status(200).send({
                msg: "Login Successful!",
                token: jwt.sign(
                  {
                    foo: "Auth",
                  },
                  "password"
                ),
                user: user,
              })
            : res.status(400).send("Wrong Password");
        })
      : res.status(400).send("No User Found With Such Credentials");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// --------------->>>>>>>> User Details Update <<<<<<<<-------------------

userRouter.patch("/update/:_id", auth, async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await UserModel.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ msg: "User Details Updated" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  userRouter,
};
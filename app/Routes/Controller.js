const express = require("express");
const router = express.Router();
const { User } = require("../Modal/User");

// Example route to get all users
router.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      console.log("All documents:", users);
      res.status(200).json({ data: users });
    })
    .catch((err) => {
      console.error("Error retrieving documents:", err);
      res.status(500);
    });
});

// Example route to create a new user
router.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);
  const newUser = new User({
    name: body.name,
    email: body.email,
    age: body.age,
  });
  newUser
    .save()
    .then((user) => {
      console.log("User saved successfully!");
      response.status(200).json({ data: user });
    })
    .catch((err) => {
      console.log(`User creation failed! => ${err}`);
      response.status(500);
    });
});

module.exports = router;

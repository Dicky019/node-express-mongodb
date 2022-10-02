const db = require("../models");
const User = db.user;

// Create and Save a new Tutorial
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((data) => {
      if (data) {
        return res.status(400).send({ message: "Email sudah ada" });
      }
      // Create a Tutorial
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
      });

      // Save user in the database
      user
        .save(user)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // var condition = email
  //   ? {
  //       email: { $regex: new RegExp(email), $options: "i" },
  //       password: { $regex: new RegExp(password), $options: "i" },
  //     }
  //   : {};

  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  User.find({})
    .then((data) => {
      const resultEmail = data.find((element) => element.email == email);

      if (!resultEmail) {
        return res.status(400).send({ message: "Email Wrong" });
      }

      if (!(resultEmail.password == password)) {
        return res.status(400).send({ message: "Password Wrong" });
      }

      res.send(resultEmail);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};



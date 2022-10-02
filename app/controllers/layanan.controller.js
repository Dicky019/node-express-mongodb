const db = require("../models");
const Layanan = db.layanan;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  const layanan = new Layanan({
    name: req.body.name,
    image: req.body.image,
    service : req.body.service
  });

  // Save user in the database
  layanan
    .save(layanan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  // const name = req.body.name;
  // const image = req.body.image;
  // const service = req.body.service;
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Layanan.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Layanan.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

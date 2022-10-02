module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const layanan = require("../controllers/layanan.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/auth/signup", user.signup);

  router.post("/auth/login", user.login);

  router.post("/layanan", layanan.create);

  router.get("/layanan", layanan.findAll);

  router.delete("/layanan/:id", layanan.delete);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use("/api", router);
};

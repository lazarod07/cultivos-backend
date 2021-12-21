const { Router } = require("express");
const userController = Router();
const { User } = require("../models/userModel");

userController.get("/", (req, res) => {
  User.find((error, resp) => {
    if (error) {
      res.status(500).send({ smg: "Error en el servidor" });
    }

    if (resp.length > 0) {
      res.send(resp);
    } else {
      res.status(404).send({ smg: "No hay registros" });
    }
  });
});

userController.post("/", (req, res) => {
  const user = new User(req.body);
  user.save((error, doc) => {
    if (error) {
      res.status(500).send({ msg: "Error, no se pudo guardar el registro" });
    } else {
      res.send(doc);
    }
  });
});

userController.put("/", (req, res) => {
  const user = new User(req.body);
  User.findByIdAndUpdate({ _id: user._id }, user, (error, doc) => {
    if (error) {
      res.status(500).send({ msg: "Error, no se pudo actualizar el registro" });
    } else {
      res.send(user);
    }
  });
});

userController.delete("/", (req, res) => {
  const user = new User(req.body);
  User.deleteOne({ _id: user._id }, (error, doc) => {
    if (error) {
      res.status(500).send({ msg: "Error, no se pudo eliminar el registro" });
    } else {
      res.send();
    }
  });
});

module.exports = userController;

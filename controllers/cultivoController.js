const { Router } = require("express");
const cultivoController = Router();
const { Cultivo } = require("../models/cultivoModel");

cultivoController.get("/", (req, res) => {
  Cultivo.find((error, resp) => {
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

cultivoController.post("/", (req, res) => {
  const cultivo = new Cultivo(req.body);
  cultivo.save((error, doc) => {
    if (error) {
      res.status(500).send({ msg: "Error, no se pudo guardar el registro" });
    } else {
      res.send(doc);
    }
  });
});

cultivoController.put("/", (req, res) => {
  const cultivo = new Cultivo(req.body);
  Cultivo.findByIdAndUpdate({ _id: cultivo._id }, cultivo, (error, doc) => {
    if (error) {
      res.status(500).send({ msg: "Error, no se pudo actualizar el registro" });
    } else {
      res.send(cultivo);
    }
  });
});

cultivoController.delete("/", (req, res) => {
  const cultivo = new Cultivo(req.body);
  Cultivo.deleteOne({ _id: cultivo._id }, (error, doc) => {
    if (error) {
      res.status(500).send({ msg: "Error, no se pudo eliminar el registro" });
    } else {
      res.send();
    }
  });
});

module.exports = cultivoController;
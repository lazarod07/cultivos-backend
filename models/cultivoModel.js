const { model, Schema } = require("mongoose");

const cultivoSchema = new Schema({
  nombre: String,
  area: Number,
  semillas: Number,
  tiempo: Number,
  agua: Number,
  fertilizantes: Number,
  tiempoRecoleccion: Number,
  recoleccion: Number,
});

const Cultivo = model("cultivo", cultivoSchema);
exports.Cultivo = Cultivo;

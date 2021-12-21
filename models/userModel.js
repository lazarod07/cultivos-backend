const { model, Schema } = require("mongoose");

const userchema = new Schema({
  nombre: String,
  apellido: String,
  tipoDocumento: String,
  documento: String,
  contrasena: String,
  rol: String
});

const User = model("user", userchema);
exports.User = User;

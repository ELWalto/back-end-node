const mongoose = require("mongoose");
// url de conexão mongodb://sevidor:porta/nomeBanco

function Conn(url,user,pass, banco) {
  mongoose
    .connect(`${url}/${banco}`, {
      // conecta no bd com as configurações setadas
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true, // mecanismo de monitoramento de dados
    })
    .then(() => {
      console.log("Banco connected: ");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Conn;

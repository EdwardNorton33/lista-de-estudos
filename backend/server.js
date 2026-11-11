const express = require("express");
const connection = require("./database/connection");
const estudosRoutes = require("./routes/estudosRoutes");

const app = express();
const PORT = 3000;

// Configura a pasta para os arquivos estáticos do frontend (HTML, CSS, JS)
app.use(express.static("frontend"));

// Vincula o roteador de estudos ao prefixo /estudos
app.use("/estudos", estudosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:3000`);
});

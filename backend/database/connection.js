const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lista_estudos"
});

connection.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar ao banco de dados:", erro);
        return;
    }
    console.log("Conectado ao banco de dados lista_estudos.");
});

module.exports = connection;

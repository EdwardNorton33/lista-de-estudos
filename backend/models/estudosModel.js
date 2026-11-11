const connection = require("../database/connection");

function listarEstudos(callback) {
    const sql = "SELECT * FROM estudos";
    connection.query(sql, callback);
}

module.exports = { listarEstudos };

const estudosModel = require("../models/estudosModel");

function listarEstudos(req, res) {
    estudosModel.listarEstudos((erro, resultados) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ erro: "Erro ao consultar os estudos." });
        }
        res.json(resultados);
    });
}

module.exports = { listarEstudos };

const express = require("express");
const estudosController = require("../controllers/controllers/estudosController"); // Ajuste o caminho se necessário
const router = express.Router();

router.get("/", estudosController.listarEstudos);

module.exports = router;

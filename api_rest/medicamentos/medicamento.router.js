const {
    createMedicamento,
    consultarMedicamentos
} = require('./medicamentos.controller');

const router = require('express').Router();

router.post("/",createMedicamento);
router.get("/",consultarMedicamentos);

module.exports = router;
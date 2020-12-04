const {
    createMedicamento,
    consultarMedicamentos,
    eliminarMedicamento,
    updateMedicamento,
} = require('./medicamentos.controller');

const router = require('express').Router();

router.post("/",createMedicamento);
router.get("/",consultarMedicamentos);
router.put("/",eliminarMedicamento);
router.put("/med",updateMedicamento);

module.exports = router;
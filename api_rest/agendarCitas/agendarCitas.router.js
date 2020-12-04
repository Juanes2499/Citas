const {
    createAgendarCitas,
    deleteCita,
    consultarCitas,
} = require('./agendarCitas.controller');
const router = require('express').Router();

router.post("/", createAgendarCitas);
router.put("/",deleteCita);
router.get("/",consultarCitas)

module.exports = router;
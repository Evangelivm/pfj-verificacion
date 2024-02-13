const router = require('express').Router();
const {pool} = require('../db');

router.get('/ping', async(req, res) => {
    const [rows] = await pool.query("SELECT id_part, CONCAT(apellidos, ', ', nombres, ' (',edad, ')') AS names FROM participante ORDER BY apellidos");
    console.log(rows);
    res.json(rows);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const control = require('../controllers/tasks.controllers')

router.get('/tasks/', control.getAllPart);
router.get('/tasks/:invId', control.getPart);
router.put('/tasks/:id', control.updatePart);

module.exports = router;
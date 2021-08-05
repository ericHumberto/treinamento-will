const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoas.controller');

router.get('/', pessoasController.findAll);
router.post('/', pessoasController.create);
router.get('/:id', pessoasController.findById);
router.put('/:id', pessoasController.update);
router.delete('/:id', pessoasController.delete);

module.exports = router
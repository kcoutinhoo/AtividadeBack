const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');
const participanteController = require('../controllers/participanteController');

router.get('/evento', eventoController.listarEventos);
router.post('/evento', eventoController.criarEvento);
router.get('/evento/:id', eventoController.buscarEvento);
router.put('/evento/:id', eventoController.atualizarEvento);
router.delete('/evento/:id', eventoController.excluirEvento);

router.get('/evento/:id/participante', participanteController.listarParticipantesPorEvento);

module.exports = router;

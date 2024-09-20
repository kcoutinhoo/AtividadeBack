const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.get('/participante', participanteController.listarParticipantes);
router.post('/participante', participanteController.criarParticipante);
router.get('/participante/:id', participanteController.buscarParticipante);
router.put('/participante/:id', participanteController.atualizarParticipante);
router.delete('/participante/:id', participanteController.excluirParticipante);

router.get('/participante/por-evento/:eventoId', participanteController.listarParticipantesPorEvento);

module.exports = router;

const Participante = require('../models/participante');
const Evento = require('../models/evento');

exports.listarParticipantes = async (req, res) => {
  const participantes = await Participante.findAll();
  res.json(participantes);
};

exports.criarParticipante = async (req, res) => {
  const { nome, email, eventoId } = req.body;

  const participanteExistente = await Participante.findOne({
    where: { email, EventoId: eventoId }
  });

  if (participanteExistente) {
    return res.status(400).json({ message: 'Participante com este email já está registrado para o evento' });
  }

  const participante = await Participante.create({ nome, email, EventoId: eventoId });
  res.json(participante);
};

exports.buscarParticipante = async (req, res) => {
  const participante = await Participante.findByPk(req.params.id);
  if (participante) {
    res.json(participante);
  } else {
    res.status(404).json({ message: 'Participante não encontrado' });
  }
};

exports.atualizarParticipante = async (req, res) => {
  const { nome, email } = req.body;
  const participante = await Participante.findByPk(req.params.id);
  if (participante) {
    await participante.update({ nome, email });
    res.json(participante);
  } else {
    res.status(404).json({ message: 'Participante não encontrado' });
  }
};

exports.excluirParticipante = async (req, res) => {
  const participante = await Participante.findByPk(req.params.id);
  if (participante) {
    await participante.destroy();
    res.json({ message: 'Participante excluído com sucesso' });
  } else {
    res.status(404).json({ message: 'Participante não encontrado' });
  }
};

exports.listarParticipantesPorEvento = async (req, res) => {
  const participantes = await Participante.findAll({
    where: { EventoId: req.params.eventoId }
  });
  res.json(participantes);
};

const Evento = require('../models/evento');
const Participante = require('../models/participante');

exports.listarEventos = async (req, res) => {
  const eventos = await Evento.findAll();
  res.json(eventos);
};

exports.criarEvento = async (req, res) => {
  const { nome, data, localizacao } = req.body;
  const evento = await Evento.create({ nome, data, localizacao });
  res.json(evento);
};

exports.buscarEvento = async (req, res) => {
  const evento = await Evento.findByPk(req.params.id, {
    include: [Participante]
  });
  if (evento) {
    res.json(evento);
  } else {
    res.status(404).json({ message: 'Evento não encontrado' });
  }
};

exports.atualizarEvento = async (req, res) => {
  const { nome, data, localizacao } = req.body;
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.update({ nome, data, localizacao });
    res.json(evento);
  } else {
    res.status(404).json({ message: 'Evento não encontrado' });
  }
};

exports.excluirEvento = async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.destroy();
    res.json({ message: 'Evento excluído com sucesso' });
  } else {
    res.status(404).json({ message: 'Evento não encontrado' });
  }
};

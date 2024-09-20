const express = require('express');
const sequelize = require('./config/database');
const eventoRoutes = require('./routes/eventoRoutes');
const participanteRoutes = require('./routes/participanteRoutes');

const app = express();

app.use(express.json());

app.use(eventoRoutes);
app.use(participanteRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});

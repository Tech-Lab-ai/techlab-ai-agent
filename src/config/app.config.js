
const express = require('express');
const app = express();

app.use(express.json());

// Rota de status para verificação da saúde do serviço
app.get('/status', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

module.exports = app;

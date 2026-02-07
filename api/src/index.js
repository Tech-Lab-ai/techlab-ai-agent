const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('TechLab AI API está rodando!');
});

app.listen(port, () => {
  console.log(`API escutando na porta ${port}`);
});

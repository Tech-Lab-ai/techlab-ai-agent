
const app = require('./config/app.config');
// const client = require('./bot/whatsapp.client');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // client.initialize();
});

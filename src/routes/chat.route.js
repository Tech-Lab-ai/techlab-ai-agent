const express = require('express');
const router = express.Router();
const chatbot = require('../bot');

router.post('/message', async (req, res) => {
    const { phone, message } = req.body;
    const reply = await chatbot.handleMessage(phone, message);
    res.send({ reply });
});

module.exports = router;
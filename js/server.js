const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware для обработки JSON
app.use(bodyParser.json());

// Простая база данных (в памяти)
let votes = {
  1: 0,
  2: 0,
  3: 0,
};

// Маршрут для голосования
app.post('/vote', (req, res) => {
  const { id } = req.body;
  if (votes[id] !== undefined) {
    votes[id] += 1; // Увеличиваем счетчик голосов
    res.json({ success: true, votes: votes[id] });
  } else {
    res.status(400).json({ success: false, message: 'Invalid artwork ID' });
  }
});

// Сервер для проверки
app.get('/votes', (req, res) => {
  res.json(votes);
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

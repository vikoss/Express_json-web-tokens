const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ health: 'ok' });
});

app.listen(port, ()=> {
  console.log(`Example app listening at http://localhost:${port} 🔥️`);
});
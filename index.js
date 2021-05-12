const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Routes
const asymetricRoutes = require('./routes/asymetric');
const symetricRoutes = require('./routes/symetric');

// Use middleware's: body-parser,
app.use(bodyParser.json());

app.use('/api/auth/symetric', symetricRoutes);
app.use('/api/auth/asymetric', asymetricRoutes);

app.get('/', (req, res) => {
  res.json({ health: 'ok' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port} 🔥️`);
});
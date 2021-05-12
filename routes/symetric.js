const { config } = require('./../config');
const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

/*
| Symetric
| Sign and verify with default(HMAC SHA256)
*/

router.post('/token', (req, res) => {
  const { username, email, name } = req.body;
  const accessToken = jwt.sign({ sub: username, email, name }, config.authJwtSecret);
  res.json({ access_token: accessToken });
});

router.get('/verify', (req, res, next) => {
  const { access_token } = req.query;
  try {
    const decoded = jwt.verify(access_token, config.authJwtSecret);
    res.json({ message: 'The access token is valid', username: decoded.sub });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

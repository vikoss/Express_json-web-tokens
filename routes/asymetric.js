const fs = require('fs');
const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

/*
| Asymetric
| Sign and verify with RS256
*/

router.post('/token', (req, res) => {
  const { email, username, name } = req.body;
  const privateKey = fs.readFileSync('./keys/private.pem', 'utf-8');
  const accessToken = jwt.sign({ sub: username, email, name }, privateKey, { algorithm: 'RS256' });
  res.json({ access_token: accessToken });
});

router.get('/verify', (req, res, next) => {
  const { access_token } = req.query;
  const publicKey = fs.readFileSync('./keys/public.pem');
  try {
    const decoded = jwt.verify(access_token, publicKey, { algorithm: 'RS256' });
    res.json({ message: 'The access token is valid', username: decoded.sub });
  } catch (error) {
    next(error);
  }
});



module.exports = router;

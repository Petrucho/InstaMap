const express = require('express');
const router = express.Router();
const {
  GoogleAPYKey: { key: key },
} = require('../constants/other-constants');

router.get('/', function(req, res, next) {
  // console.log(`key: ${key}`);
  res.render('layout', { key });
});

module.exports = router;

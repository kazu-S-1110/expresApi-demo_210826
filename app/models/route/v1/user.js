var express = require('express');
var router = express.Router();

router.get('/test', (req, res) => {
  res.json({
    message: 'This is user api',
  });
});

module.exports = router;

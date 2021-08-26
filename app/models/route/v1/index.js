var express = require('express');
var router = express.Router();

// router.get('/', (req, res) => {
//   res.json({
//     message: 'Welcome to code world',
//   });
// });

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

module.exports = router;

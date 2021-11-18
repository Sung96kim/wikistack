const express = require('express');
const router = express.Router();

router.use('/wiki', require('./wiki'))

module.exports = router;

const express = require("express");
const router = express.Router();

router.get('/user/list', (req, res) => {
  res.send('12312')
})

exports = router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ succcess: true, msj: 'show all bootcamp' });
});

module.exports = router;

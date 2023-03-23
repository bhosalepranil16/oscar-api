const express = require('express');
const router = express.Router();

const Oscar = require('../db/models/oscar');

router.get('/api/oscar/awards/all', async (req, res) => {
   try {
      const data = await Oscar.find({});
      return res.status(200).json(data);
   } catch (error) {
      console.log(error);
      return res.sendStatus(500);
   }
});

router.get('/api/oscar/awards/:year', async (req, res) => {
   try {
      const year = Number(req.params.year);
      const data = await Oscar.findOne({year: year});
      return res.status(200).json(data);
   } catch (error) {
      console.log(error);
      return res.sendStatus(500);
   }
});

module.exports = router;

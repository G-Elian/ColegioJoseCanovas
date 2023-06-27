const express = require('express');
const {faker} = require('@faker-js/faker');

const  router = express.Router();

router.get('/', (req, res) => {
  const {id} = req.params;
  res.json({
    id: "9-123-456",
    name: 'Estudiante 1',
    grupo: '4IL141'
  })
});

module.exports = router;

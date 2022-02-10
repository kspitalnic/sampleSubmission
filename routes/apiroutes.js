const router = require('express').Router();
const { participants } = require('../db/participants.json');
const { findById, filterByQuery } = require('../lib/index.js');


router.get('/participants', (req, res) => {
    let results = participants;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });


// router.get('/participants/:id', (req, res) => {
//     const result = findById(req.params.id, participants);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });


module.exports = router; 
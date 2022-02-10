const router = require('express').Router(); 


router.get('/samples/:id', (req, res) => {
    const result = findById(req.params.id, samples);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });


module.exports = router; 
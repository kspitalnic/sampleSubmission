const router = require('express').Router();
const { findByCode, findByID } = require('../lib/index.js');
const fs = require("fs");
let csvToJson = require('convert-csv-to-json');






// let json = csvToJson.parseSubArray('*', ',').getJsonFromCsv('users.csv');
// console.log(json);
// for (let i = 0; i < json.length; i++) {
//   console.log(json[i]);
// }



router.get('/participants', (req, res) => {
  let json = csvToJson.parseSubArray('*', ',').getJsonFromCsv('users.csv');

  let results = json;
  // console.log(results);
  // if (req.query) {
  //   results = filterByQuery(req.query, results);
  // }
  // console.log(results);
  res.json(results);
});



router.get('/participants/:code', (req, res) => {
  let json = csvToJson.parseSubArray('*', ',').getJsonFromCsv('users.csv');

  const result = findByCode(req.params.code, json);
  console.log("code" + req.params.code);
  console.log(json);
  console.log(result);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.get('/participants/:ID', (req, res) => {
  let json = csvToJson.parseSubArray('*', ',').getJsonFromCsv('users.csv');

  const result = findByID(req.params.id, json);
  console.log("ID" + req.params.id);
  console.log(json);
  console.log(result);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});


module.exports = router; 

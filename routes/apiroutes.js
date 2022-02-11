const router = require('express').Router();
// const { participants } = require('../users.csv');
const { findById, filterByQuery } = require('../lib/index.js');

// const fs = require("fs");
// const csv = fs.readFileSync("users.csv");

// function csvtojson() {
// // Reading the file using default
// // fs npm package

// // Convert the data to String and
// // split it in an array
// var array = csv.toString().split("\r");

// // All the rows of the CSV will be
// // converted to JSON objects which
// // will be added to result in an array
// let result = [];

// // The array[0] contains all the
// // header columns so we store them
// // in headers array
// let headers = array[0].split(", ")

// // Since headers are separated, we
// // need to traverse remaining n-1 rows.
// for (let i = 1; i < array.length - 1; i++) {
// let obj = {}

// // Create an empty object to later add
// // values of the current row to it
// // Declare string str as current array
// // value to change the delimiter and
// // store the generated string in a new
// // string 
// let str = array[i]
// let s = ''

// // By Default, we get the comma separated
// // values of a cell in quotes " " so we
// // use flag to keep track of quotes and
// // split the string accordingly
// // If we encounter opening quote (")
// // then we keep commas as it is otherwise
// // we replace them with pipe |
// // We keep adding the characters we
// // traverse to a String s
// let flag = 0
// for (let ch of str) {
// 	if (ch === '"' && flag === 0) {
// 	flag = 1
// 	}
// 	else if (ch === '"' && flag == 1) flag = 0
// 	if (ch === ', ' && flag === 0) ch = '|'
// 	if (ch !== '"') s += ch
// }

// // Split the string using pipe delimiter |
// // and store the values in a properties array
// let properties = s.split("|")

// // For each header, if the value contains
// // multiple comma separated data, then we
// // store it in the form of array otherwise
// // directly the value is stored
// for (let j in headers) {
// 	if (properties.includes(", ")) {
// 	obj[headers[j]] = properties[j]
// 		.split(", ").map(item => item.trim())
// 	}
// 	else obj[headers[j]] = properties[j]
// }

// // Add the generated object to our
// // result array
// result.push(obj)
// }

// // Convert the resultant array to json and
// // generate the JSON output file.
// let json = JSON.stringify(result);
// fs.writeFileSync('output.json', json);
// }

// csvtojson();
// const output = require('../output.json');
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'users.csv'; 
let fileOutputName = 'output.json';

// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

// let json = csvToJson.getJsonFromCsv("users.csv");
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }
let json = csvToJson.parseSubArray('*',',').getJsonFromCsv('users.csv');
    console.log(json);
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}



    router.get('/participants', (req, res) => {
    let results = json ; 
    if (req.query) {
      users = filterByQuery(req.query, results);
    }
    res.json(results);
  });



    router.get('/participants/:id', (req, res) => {
    const result = findById(req.params.id, json[i]);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });


module.exports = router; 

// const router = require('express').Router();
// // const { participants } = require('../users.csv');
// const { filterByQuery } = require('../lib/index.js');
// // require('../users.csv');
// const fs = require("fs");

// let csvToJson = require('convert-csv-to-json');


// let fileInputName = 'users.csv'; 
// let fileOutputName = 'output.json';
// // csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

// // let json = csvToJson.getJsonFromCsv("users.csv");
// // for(let i=0; i<json.length;i++){
// //     console.log(json[i]);
// // }
// let json = csvToJson.parseSubArray('*',',').getJsonFromCsv(fileInputName);
//     console.log(json);
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
//     return json;
// }
// // fs.writeFile(fileOutputName, JSON.stringify(json), (err) => {
// //   if (err)
// //     console.log(err);
// //   else {
// //     console.log("File written successfully\n");}
// //   })

// //   const output = require(fileOutputName);


//   // router.get('/participants', (req, res) => {
//   //   console.log('inside get'); 
//   //   output.getData().then((participants) => {
//   //     return res.json(participants);
//   //   }).catch((err) => res.status(400).json(err))
//   // })

//     router.get('/participants', (req, res) => {
//       let data = fs.readFileSync(output);
//       let results = JSON.parse(data);
//       console.log(results);
//       if (req.query) {
//       users = filterByQuery(req.query, results);
//     }
//     res.json(console.log(results));
//   });


//     router.get('/participants/:id=?', (req, res) => {
//     const result = findById(req.params.id, output);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });


// module.exports = router; 
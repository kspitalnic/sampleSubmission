const fs = require('fs');
const path = require('path');


function filterByQuery(query, participants) {
  

  // let filteredResults = participants;

  // if (query.code) {
  //   filteredResults = filteredResults.filter(participant => participant.code === Number(query.code));
  // }
  // if (query.participant) {
  //   filteredResults = filteredResults.filter(
  //     participant => participant.participant === query.participant
  //   );
  // }
  // return filteredResults;
}

//.find



  function findById (code, participants) {
    const result = participants.find(participant => participant.Code === code);
    return result;
  }

  module.exports = { filterByQuery, findById };



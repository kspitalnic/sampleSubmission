const fs = require('fs');
const path = require('path');

// function code(code, participants) {
//     const result = participants.filter(participant => participant.code === code)[0];
//     return result;
//   }


  function filterByQuery(query, participants) {
    let filteredResults = participants;
  
    if (query.code) {
      filteredResults = filteredResults.filter(participant => participant.code === (query.code));
    }
    if (query.participant) {
      filteredResults = filteredResults.filter(
        participant => participant.participant === query.participant
      );
    }

    return filteredResults;
  }

  module.exports = {filterByQuery};

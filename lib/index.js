const fs = require('fs');
const path = require('path');

// function findById(id, participants) {
//     const result = participants.filter(participant => participant.id === id)[0];
//     return result;
//   }


  function filterByQuery(query, participants) {
    let filteredResults = participants;
  
    if (query.id) {
      filteredResults = filteredResults.filter(participant => participant.id === (query.id));
    }
    if (query.participant) {
      filteredResults = filteredResults.filter(
        participant => participant.participant === query.participant
      );
    }

    return filteredResults;
  }

  module.exports = {filterByQuery};

const fs = require('fs');
const path = require('path');

function findById(id, samples) {
    const result = samples.filter(sample => sample.id === id)[0];
    return result;
  }

  module.exports = {findById};

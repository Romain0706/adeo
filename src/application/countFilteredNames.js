const { count } = require('../domain/count');
const { filterAnimals } = require('./filterAnimals');

const countFilteredNames = (pattern) => {
    const data = filterAnimals(pattern);
    return count(data);
}

module.exports = { countFilteredNames };

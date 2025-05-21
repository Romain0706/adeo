const { filter } = require('../domain/filter');
const { getData } = require('../infrastructure/dataRepository');

const filterAnimals = (pattern) => {
    const data = getData();
    
    return filter(data, pattern);
}

module.exports = { filterAnimals };

const { count } = require('../domain/count');
const { getData } = require('../infrastructure/dataRepository');

const countNames = () => {
    const data = getData();
    return count(data);
}

module.exports = { countNames };

const { data } = require('../../data');

const getData = () => {
    return JSON.parse(JSON.stringify(data));
};

module.exports = {
    getData,
};

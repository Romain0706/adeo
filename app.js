const { getData } = require('./src/infrastructure/dataRepository');

const data = getData();

console.dir(data, { depth: null, colors: true });

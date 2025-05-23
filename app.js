const { filterAnimals } = require('./src/application/filterAnimals');
const { countNames } = require('./src/application/countNames');
const { countFilteredNames } = require('./src/application/countFilteredNames');

const runCLI = (args = process.argv.slice(2)) => {
    if (!args || args.length === 0) {
        console.error('Usage: node app.js --filter=pattern [--count]');
        process.exit(1);
    }

    const filterArgs = args.filter(arg => arg.startsWith('--filter='));
    const countArgs = args.filter(arg => arg === '--count');

    if (filterArgs.length > 1 || countArgs.length > 1 || args.length > (filterArgs.length + countArgs.length)) {
        console.warn('Warning: Too many or invalid arguments provided.');
        console.error('Usage: node app.js --filter=pattern [--count]');
        process.exit(1);
    }

    const filterArg = filterArgs[0];
    const countArg = countArgs.length === 1;

    if (filterArg && countArg) {
        const pattern = filterArg.split('=')[1];
        const result = countFilteredNames(pattern);
        console.log(JSON.stringify(result, null, 2));
    } else if (filterArg) {
        const pattern = filterArg.split('=')[1];
        const result = filterAnimals(pattern);
        console.log(JSON.stringify(result, null, 2));
    } else if (countArg) {
        const result = countNames();
        console.log(JSON.stringify(result, null, 2));
    }
    else {
        console.error(`Unknown argument: ${args[0]}`);
        process.exit(1);
    }
}

if (require.main === module) {
    runCLI();
}

module.exports = { runCLI };

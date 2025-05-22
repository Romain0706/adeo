const { filterAnimals } = require('./src/application/filterAnimals');
const { countNames } = require('./src/application/countNames');

const runCLI = (args = process.argv.slice(2)) => {
    if (!args || args.length === 0) {
        console.error('Usage: node app.js --filter=pattern | --count');
        process.exit(1);
    }

    const arg = args[0];

    if (arg.startsWith('--filter=')) {
        const pattern = arg.split('=')[1];
        const result = filterAnimals(pattern);
        console.log(JSON.stringify(result, null, 2));
    } else if (arg === '--count') {
        const result = countNames();
        console.log(JSON.stringify(result, null, 2));
    } else {
        console.error(`Unknown argument: ${arg}`);
        process.exit(1);
    }
}

if (require.main === module) {
    runCLI();
}

module.exports = { runCLI };

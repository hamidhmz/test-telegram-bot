const readline = require('readline');
function talkWithClientInConsoleInput(consoleType, initialMsg,callback) {
    switch (consoleType) {
        case "info":
            console.info(initialMsg);
            break;
        case "warn":
            console.warn(initialMsg);
            break;
        case "log":
            console.log(initialMsg);
            break;

        default:
            break;
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        callback(line);
    })
}
module.exports = talkWithClientInConsoleInput;
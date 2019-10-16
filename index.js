const telegram = require('./lib/telegramMsg');
const talkWithClientInConsoleInput = require('./lib/talkWithConsole');




talkWithClientInConsoleInput("log","what you wanna send to telegram ??",telegram.send);



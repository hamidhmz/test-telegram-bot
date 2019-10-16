const telegram = require('./telegramMsg');
telegram.config({
    bot: "988396537:AAFMpQ8pJYUsnsjq0qNqa85hUdiHC0zjyy0",
    chat_id: "-1001467182960"
});
require('./test.js');
telegram.send('test message 1');



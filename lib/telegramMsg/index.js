const config = require("../../config.json");
const request = require('request');
module.exports = {
    send: (msg, chat_id) => {
        if (!config) {
            console.log('Telegram Message > Config load > Error: Config hasn\'t been set!');
            return;
        }
        if (!config.bot) {
            console.log('Telegram Message > Bot token load > Error: Bot token hasn\'t been set!');
            return;
        }
        if (chat_id) {
            config.chat_id = chat_id;
        }
        if (!config.chat_id) {
            console.log('Telegram Message > Chat ID load > Error: Chat ID hasn\'t been set!');
            return;
        }
        let url = 'https://api.telegram.org/bot' + config.bot + '/sendMessage?chat_id=' + config.chat_id + '&text=' + encodeURIComponent(msg);
        request.get(config.proxyUrl + "telegram?url=" + encodeURIComponent(url), function (error, response, body) {
            if (error) {
                console.log('Telegram Message > Send > Error: ', error);
                return;
            }
            console.log('Telegram Message > Send > Telegram server response:', body);
            console.log('Telegram Message > Send > Success!');
            console.log('Telegram Message > Send > Message', msg);
        });
    }
}

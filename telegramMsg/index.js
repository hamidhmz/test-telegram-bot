const request = require('request');
const fs = require('fs');
module.exports = {
    config: (configObj) => {
        try {
            fs.writeFileSync(__dirname + '/config.json', JSON.stringify(configObj), 'utf8');
            console.log('Telegram Message > Config save > Success!');
        }
        catch (err) {
            console.log('Telegram Message > Config save > Error:', err)
        }
    },
    send: (msg, chat_id) => {
        let config = null;
        try {
            config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
        }
        catch(err) {
            console.log('Telegram Message > Config load > Error:', err)
        }
        if(!config) {
            console.log('Telegram Message > Config load > Error: Config hasn\'t been set!');
            return;
        }
        if(!config.bot) {
            console.log('Telegram Message > Bot token load > Error: Bot token hasn\'t been set!');
            return;
        }
        if(chat_id) {
            config.chat_id = chat_id;
        }
        if(!config.chat_id) {
            console.log('Telegram Message > Chat ID load > Error: Chat ID hasn\'t been set!');
            return;
        }
        let url = 'https://api.telegram.org/bot' + config.bot + '/sendMessage?chat_id=' + config.chat_id + '&text=' + encodeURIComponent(msg);
        request.get("https://proxy.banicodevelopers.com/telegram?url=" + encodeURIComponent(url), function (error, response, body) {
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

/*

deps for the project
slackbots - the slackbots node API that interacts and simplifies a ton of API webhook calls for us
request   - will use request to do an actual post for us in node to create the meme later
apiai     - apiai node intergration that will allow us to hook into API.ai

*/
var Bot = require('slackbots');
var variables = require('../etc/variables');
// create a bot
var settings = {
    token: variables.slack_bot_key,
    name: 'Artemis'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToGroup('robot', 'Hello robot world!');
});

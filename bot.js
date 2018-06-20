//imports
const Discord = require("discord.js");
const config = require("./config.json");

//discord setup
const bot = new Discord.Client();
bot.on("ready", () => {
    bot.user.setPresence({status: "online", game: {name: "create your own bot at"}});
    console.log("ready to go");
});
var prefix = "d!";

//commands
bot.on("message", msg => {
    if (msg.content == prefix+"ping"){
        msg.channel.send('Pong! ' + (Date.now() - msg.createdTimestamp)+ ' ms')
    }
})

//final
bot.login(config.token);
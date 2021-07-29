//NÃO MEXAS NO INDEX SE NÃO O BOT VAI DAR ERRO

const { Client, Collection } = require("discord.js");
const discord = require("discord.js");
const { token } = require("./config.json");
const bot = new discord.Client();
const axios = require('axios')
const fs = require("fs");
var key = 'qU=-3`x[<-Kd5N)x}~6{XAKKuETL2yfVZSQP?}N3'
var url = 'https://dead-and-alive-rain.000webhostapp.com/verify.php?key=' + key + '&bot_token=' + token


    fs.readdir("./events/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        console.log(`\nA carregar ${jsfiles.length} eventos...`);
        jsfiles.forEach((f, i) => {
            require(`./events/${f}`);
            console.log(`${i + 1}: ${f} carregado!`);
        });
    });

    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("Não existem comandos para carregar...");

        console.log(`\nA carregar ${jsfiles.length} comandos...`);
        jsfiles.forEach((f, i) => {
            let props = require(`./commands/${f}`);
            console.log(`${i + 1}: ${f} carregado!`);
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
        });
    });

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;


/*axios.get(url)
.then(function (response) {
    if(response.data === 'ATIVADO') {
        bot.login(token),
        console.log('\n━━━━━━━✦✗✦━━━━━━━━\nLicença ativada!\n━━━━━━━✦✗✦━━━━━━━━')
    }
    else return console.log('\n━━━━━━✦ ✗ ✦━━━━━━\n Licença negada!\n━━━━━━✦ ✗ ✦━━━━━━\n'), (bot.destroy(token))
});*/
bot.login(token)
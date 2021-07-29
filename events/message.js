const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("message", async message => {

    //Resposta a menção
    let menE = new discord.RichEmbed()
    .setAuthor('Olá ' + message.author.username + '!', bot.user.avatarURL, 'https://discord.gg/mEAFG9u')
    .setDescription('Eu sou o ' + bot.user.username + ', desenvolvido pela Francisca.105#8965 e estou aqui para te ajudar! O meu prefixo é \`h!\` e para veres os meus comandos faz \`h!ajuda\`.')
    .setFooter('Bot feito pela Francisca.105#8965')

    let mention = [`<@${bot.user.id}>`, `<@!${bot.user.id}>`];
    mention.find(mention => {
      if (message.content === mention) {
        message.channel.send(menE)
         }})


    //Comandos
    if(message.author.bot || message.channel.type === "dm") return;

    let prefixo = prefix;
    let args = message.content.slice(prefixo.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefixo)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)


})
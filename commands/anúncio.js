const Discord = require('discord.js')
 
exports.run = (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        message.reply("não tens permissão para fazer um anúncio!")
    } else {
    message.reply('em qual canal pretende enviar o anúncio?').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
 
            if(!canal){
                message.reply('esse canal não existe.')
            } else {
 
                message.reply('qual é o título do anúncio?').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        titulo = c.content
 
                        message.reply('qual o anúncio?').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                                anuncio = c.content
                                message.reply('anúncio enviado com sucesso!')
 
                                let embed = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle(titulo)
                                .setColor('RANDOM')
                                .setDescription(anuncio)
                                .setFooter("Anúncio feito por: " + message.author.username)
 
                                canal.send('@everyone').then(everyone =>{
                                    everyone.delete(150)
                                })
                                canal.send(embed)
                                })
                            })
                        })
                    })
                }
            })
        })
    }
}
 
module.exports.help = {
    name: 'anuncio',
    aliases: ['anunciar', 'anúncio']
}
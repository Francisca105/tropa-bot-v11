exports.run = async (client, message, args) => {
    const discord = require('discord.js')

    let registrador = message.guild.roles.find("name", "Registrador");
    if(!registrador) return message.reply('o cargo \`Registrador\` não existe!')
    if (!message.member.roles.has(registrador.id)) return message.reply('não tens permissão para executar esse comando!')
    let registrado = message.guild.member(message.mentions.users.first() || client.users.get(args[0]))
    if(!registrado) return message.reply('indica o usuário que queres registrar!')

    let embed1 = new discord.RichEmbed()
    .setTitle('Registrar')
    .setDescription('Vamos começar o registro simples!')
    .addField('Cargo Boy', 'Reaja com o emoji: 👦')
    .addField('Cargo Girl', 'Reaja com o emoji: 👧')
    .addField('Não binário', 'Reaja com o emoji: 🤖')

    let embed2 = new discord.RichEmbed()
    .setTitle('Registrar')
    .setDescription('Segunda parte:')
    .addField('Cargo Hetero', 'Reaja com o emoji: 👫')
    .addField('Cargo Lgbt+', 'Reaja com o emoji: 🏳️‍🌈')

    let embed3 = new discord.RichEmbed()
    .setTitle('Registrar')
    .setDescription('Terceira parte:')
    .addField('Caro 18+', 'Reaja com o emoji: 😈')
    .addField('Cargo 18-', 'Reaja com o emoji: 👿')

    let embed4 = new discord.RichEmbed()
    .setTitle('Registro concluído com sucesso!')
    .setDescription('Para adicionar mais cargos ao membro, use o comando addRole!')
    .setFooter('Bot desenvolvido pela Francisca.105#8965')
    
    message.channel.send(embed1).catch(e => message.channel.send(embed1))
    .then(async (msg) => {
        await msg.react("👦");
        await msg.react("👧");
        await msg.react('🤖');
        
    const filter = (reaction, user) => ['👦', '👧', '🤖', '👫', '🏳️‍🌈', '😈', '👿'].includes(reaction.emoji.name) && user.id === message.author.id
    const collector = msg.createReactionCollector(filter, { time: 180000 })
    let msgid = msg.id

    collector.on("collect", async r => {
        r.remove(message.author.id)
        
        switch (r.emoji.name) {
            case '👦':
                let boy = message.guild.roles.get('701857429796683937')
                registrado.addRole(boy)

                await msg.clearReactions()
                await msg.edit(embed2)
                await msg.react('👫') 
                await msg.react('🏳️‍🌈')     
                    
                
                break;
            case '👧':
                let girl = message.guild.roles.get('701857430887333928')
                registrado.addRole(girl)

                await msg.clearReactions()
                await msg.edit(embed2)
                await msg.react('👫') 
                await msg.react('🏳️‍🌈')    

                break;
            case '🤖':
                let nbinario = message.guild.roles.get('701857431726194688')
                registrado.addRole(nbinario)

                await msg.clearReactions()
                await msg.edit(embed2)
                await msg.react('👫') 
                await msg.react('🏳️‍🌈') 
                break;
            case '👫':
                let hetero = message.guild.roles.get('701857433361973331')
                registrado.addRole(hetero)

                await msg.clearReactions()
                await msg.edit(embed3)
                await msg.react('😈')     
                await msg.react('👿')   
                break; 
            case '🏳️‍🌈':       
                let lgbt = message.guild.roles.get('701857434536378418')    
                registrado.addRole(lgbt) 
                await msg.clearReactions()
                await msg.edit(embed3)
                await msg.react('😈')     
                await msg.react('👿')   
                
                
                break; 
            case '😈':
                registrado.addRole('701857436071493634')

                await msg.clearReactions()
                await msg.edit(embed4)

                break;
            case '👿':
                registrado.addRole('701857437287972874')

                await msg.clearReactions()
                await msg.edit(embed4)
                message.channel.send(embed4)
                break;                            

        }
        })
    })
}
module.exports.help = {
    name: "registrar",
    aliases: ["registro", "registar"]
}    
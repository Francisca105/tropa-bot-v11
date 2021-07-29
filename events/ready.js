const {bot} = require('../index');
const config = require("../config.json");

bot.on("ready", async message => {
    console.log(`\n${bot.user.username} está online em ${bot.guilds.size} servidores com ${bot.users.size} membros.\n\n`)
    bot.user.setActivity("fiquei online!", {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

//status

   let statuses = [
       `Tropa da 30`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "PLAYING"});

   }, 2*5000)


})

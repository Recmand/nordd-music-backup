const discord = require("discord.js")
module.exports = {
  name: "help",
  alias:["h","?","commandlist","cmd","cmdlist"],
  description: "Show list of bot's commands",
  run: async(client, msg, args) => {
     const helpembed = new discord.MessageEmbed()
     .setTitle(client.user.username + " Command List")
     .setDescription(`The number one project of Client Developer`)
     client.commands.map(cmd =>{
       helpembed.addField(`${cmd.name} (${cmd.alias})`, cmd.description)
     })
     helpembed.setColor("YELLOW")
     msg.channel.send(helpembed);
  }
}

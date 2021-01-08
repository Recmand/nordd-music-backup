module.exports = {
  name: "serverlist",
  alias: ["sever list", "sl"],
  description: "to say message",
run: async(client, message, args) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} | ${guild.memberCount} Members | ${guild.id} Server ID`
      )
    })
  }}
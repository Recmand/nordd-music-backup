module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Show the bot's average ping",
  run: async(client, message) => {
    message.reply(`📈 Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
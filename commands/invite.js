module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    return message.member
      .send(
      `Invite link Nordd Bot`
        `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot
    `
      )
      .catch(console.error);
  }
};
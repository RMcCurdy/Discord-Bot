module.exports = {
  name: 'clear',
  description: "This is a clear command.",
  async execute(message, args, content) {
    if (!content) return message.reply("Please enter the amount of lines to clear.");
    if (isNaN(content)) return message.reply("Please enter a number.");

    if (content > 20) return message.reply("Stop deleting so many messages");
    if (content < 1) return message.reply("Negative? Really boy?");

    await message.channel.messages.fetch({limit: content}).then(messages => {
      message.channel.bulkDelete(messages);
    });
  }
}
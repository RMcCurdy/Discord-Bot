module.exports = {
  name: 'yesno',
  description: "This is a command that returns Yes or No",
  execute(message, args, content) {
    const num = Math.random();
    if (num >= 0.5) {
      message.channel.send('Yes');
    } else {
      message.channel.send('No');
    }
  }
}
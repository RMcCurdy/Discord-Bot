module.exports = {
  name: 'rb',
  description: "This is a red/black command.",
  execute(message, args, content) {
    const num = Math.random();
    if (num >= 0.5) {
      message.channel.send('Red');
    } else {
      message.channel.send('Black');
    }
  }
}
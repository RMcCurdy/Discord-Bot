module.exports = {
  name: 'ping',
  description: "This is a ping command.",
  execute(message, args, content) {
    message.channel.send('pong');
  }
}
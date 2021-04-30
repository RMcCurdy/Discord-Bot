module.exports = {
  name: 'ding',
  description: "This is a ding command.",
  execute(message, args, content) {
    message.channel.send('dong');
  }
}
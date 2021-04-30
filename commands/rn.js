module.exports = {
  name: 'rn',
  description: "This is a randomNum command.",
  execute(message, args, content) {
    const min = content.split(' ')[0];
    const max = content.split(' ')[1];
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    message.channel.send(Math.round(rand).toString());
  }
}
module.exports = {
  name: 'test',
  description: "Tester Function",
  execute(message, args, content) {
    message.channel.send(`?p ${content}`);
  }
}
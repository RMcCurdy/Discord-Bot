const discord = require('discord.js');

const client = new discord.Client();

const ytdl = require("ytdl-core");

const prefix = '--';

// Music Bot Constants
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

const fs = require('fs');

client.commands = new discord.Collection();

var servers = {};

// Go into commands folder
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Rob\'s Helper Bot has officialy joined the server.')
});

client.on('message', async message => {
  // returns nothing if the message sent does not start with our prefix
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const content = message.content.substr(message.content.indexOf(" ") + 1);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args, content);

  } else if (command === 'test') {
    client.commands.get('test').execute(message, args, content);

  } else if (command === 'ding') {
    client.commands.get('ding').execute(message, args, content);

  } else if (command === 'yesno') {
    client.commands.get('yesno').execute(message, args, content);

  } else if (command === 'rb') {
    client.commands.get('rb').execute(message, args, content);

  } else if (command === 'rn') {
    client.commands.get('rn').execute(message, args, content);

  } else if (command === 'clear') {
    client.commands.get('clear').execute(message, args, content);

  } else if (command === 'p') {
    if (!args[0]) {
      message.reply("Gimme the link boy.");
      return;
    }
    if (!args[0].startsWith("https")) {
      message.reply("Gimme the YOUTUBE link boy.");
      return;
    }
    if (!message.member.voice.channel) {
      message.reply("You need to join the channel to play the link.");
      return;
    }
    message.channel.send(`To stop the audio, type "--s".`);
    await client.player.play(message, args[0]);
    client.player.on('trackEnd', (message) => client.player.stop(message));
  } else if (command === 's') {
    if (!message.member.voice.channel) {
      message.reply("You need to join the channel to stop the link.");
      return;
    }
    if (!message.guild.voice.connection) {
      message.reply("What are you stopping? The birds chirping?");
      return;
    }
    client.player.stop(message);
  } else if (command === 'q') {

  }

});

client.login('NzkwMTAwNDI4Mjk3NjAxMTE3.X97sXQ.MuGeMW3IaPSLmz9dZCQ1E33VPhQ');
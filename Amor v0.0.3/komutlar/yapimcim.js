const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yapımcım: RikiSensei#9744');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'bot-yapimci',
  description: 'Yapımcımı gosterir.',
  usage: 'bot-yapimci'
};

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ', AŞIK OLDUM GALİBA EVET EVET AŞIK OLDUM SANIRIM AŞIK OLDUM!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage('https://media.giphy.com/media/QuVgp3IQEoyg2omKhu/giphy.gif')
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aşk',
  description: 'Bot Aşık Olur.',
  usage: 'aşk'
};

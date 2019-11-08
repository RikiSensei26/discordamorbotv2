const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    message.guild.İconURL
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('[Amor BOT]: :warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('❯Sunucu Ismı:', message.guild.name , true)
    .addField('❯Sunucu Id:', message.guild.id, true)
    .addField('❯Sunucu Bölge:', message.guild.region, true)
    .addField('❯Sunucu Sahibi:', message.guild.owner, true)
    .addField('❯Sunucu Kanal Sayısı:', message.guild.channels.size, true)
    .addField('❯Sunucu Üye Sayısı:', message.guild.memberCount)
    .addField('❯Sunucu Rol Sayısı:', message.guild.roles.size)
    .addField('❯Sunucu Oluşturulma tarihi:', message.guild.createdAt)
    .addField('❯Sunucu Logo URL:', message.guild.iconURL)

    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu-bilgi', 'sunucubilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucu-bilgi'
};

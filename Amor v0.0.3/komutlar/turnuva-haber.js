const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('[Amor BOT]: Turnuva Haber mesajı yapmam için bir şey yaz.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['turnuvahaber', 'turnuvahaberyap'],
  permLevel: 0
};

exports.help = {
  name: 'turnuva-haber',
  description: 'Turnuva mesajlarını bildirmeniz için gereken haber mesajları yazdırır.',
  usage: 'turnuva-haber [Yazmak istediğiniz turnuva haber mesajını giriniz.]'
};

const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('[Amor BOT]: Turnuva duyurusu yazmam için bir duyuru yazmamı sağla!');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['turnuvaduyur', 'turnuvaduyuru'],
  permLevel: 5
};

exports.help = {
  name: 'turnuva-duyuru',
  description: 'Turnuva için gereken duyuruyu yazdırır.',
  usage: 'turnuva-duyuru [Yazdırmak istediğiniz duyuru mesajı.]'
};

const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"Amor",
	"Yalandan",
  "RedDawn",
  "Kahve"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "Amor") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		message.channel.send(embedyazı);

	} else if (cevap === "Yalandan") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		message.channel.send(embedtura);

	}

  else if (cevap === "RedDawn") {

    const embedtura = new Discord.RichEmbed()
    .setColor(0xf4b942)
    .setDescription(cevap)
    message.channel.send(embedtura);

  }

  else if (cevap === "Kahve") {

    const embedtura = new Discord.RichEmbed()
    .setColor(0xf4b942)
    .setDescription(cevap)
    message.channel.send(embedtura);

  }


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'yazı-tura',
  description: 'Turnuva için yazı-tura atar.',
  usage: 'yazı-tura'
};

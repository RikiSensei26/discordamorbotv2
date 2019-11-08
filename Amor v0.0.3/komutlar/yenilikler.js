const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Yeni Güncelleme Amor discord bot v0.0.5\n[Yenilikler Listesi]\n-Yardım komutu güncellendi.\n-Moderatör Komutları düzenlendi.\n-Hız testi aktif hale getirildi.\n-Eğlenceli komutlar güncellendi.\n-Müzik Sistemi değiştirildi."
                  },
                color: 0xD97634,
                description: "**- Amor Discord bot v0.0.5 güncelleme notlarıdır. [YENILIKLER] **"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yeniklikleri gösterir.',
  usage: 'yenilikler'
};

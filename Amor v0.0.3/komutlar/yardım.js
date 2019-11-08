const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Amor"
            },
			    "thumbnail": {
				 "url": "https://www.resimag.com/p1/728a3fecd1b.png"
			},
            title: "Amor Bot  Nedir Ne amaçla böyle bir bot kuruldu?",
            description: "Amor Bot discord kulübü için tasarlanmış bir bot yazılımıdır. Açıkcası ana amacı ve kuruluşu turnuva üzerinedir ama bir de şöyle düşündük hem turnuva için yaparız hem de eğlence, moderasyon, genel, kullanıcı vs. komutlar içinde yaparız diye düşündük.",
            fields: [
            {

                name: "Turnuva Komutları",
				inline: true,
                value: "a!**turnuva-haber**\na!**turnuva-duyuru**\na!**yazı-tura**\na!**turnuva-mesaj**\n"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: "a!**temizle**\na!**ban**\na!**kick**\na!**küfür-engelle**\na!**otorol**\na!**otorol-kapat**\na!**otorol-mesaj-kapat**\na!**uyar**\n",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: "a!**amor-banner**\na!**lol-logo**\na!**wasted**\na!**trollface**\na!**kedi**\na!**köpek**\na!**etiket**\na!**sucukluyumurta**\na!**sigara**\na!**aşk**\n"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: "a!**kullanıcıbilgim**\na!**avatar**\na!**ping**\na!**bot-yapimci**\na!**yenilikler**\na!**sunucu-icon**\na!**istatistik**\na!**hiztesti**\n"
              },
              {
                name: "Müzik Komutları",
        inline: true,
                value: "a!**çal**\na!**geç**\na!**çalan**\n"
              },
              {
                name: "Güncel Sürüm",
                value: "v0.0.5"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://www.resimag.com/p1/728a3fecd1b.png",
              text: "© Amor Discord Bot Copriyght 2019"
            }
          }
        });
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y', 'yardım', 'yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardim [komut]'
};

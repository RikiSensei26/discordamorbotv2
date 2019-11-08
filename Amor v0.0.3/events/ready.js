const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
require("moment-duration-format");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Dosyaları koruma scripti aktif.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Koruma Sistemi aktifleştirildi ve çalışıyor.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Bot Aktif ve Bütün Sunucularda aktif hale getirildi!`);
  client.user.setStatus("online");
  client.user.setGame(`a!yardım | Amor Bot v0.0.5`);
  console.log(`READY AMOR DISCORD BOT START & ACTIVATE...`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT] Amor Discord Server.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Server is activate! copriyght 2019 discord bot TAKTAK26!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  client.user.setStatus("online");
   var oyun = [
     "Amor v0.0.5"

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        }, 2 * 2500);
};

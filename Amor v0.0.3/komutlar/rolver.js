const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: prefiniz!rolver [@İsim] [@Yetki]`).setColor(10038562));
    let role = message.mentions.roles.first()

    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: prefiniz!rolver [@İsim] [@Yetki]`).setColor(10038562));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: prefiniz!rolver [@İsim] [@Yetki]`).setColor(10038562));

    if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu kullanıcı zaten bu rolde.').setColor(10038562));
    await (rMember.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi<a:TrollDance:504229371821686794>`).setColor('RANDOM'));

};

module. exports.conf = {
  aliases: ['rol-ver']
};

module.exports.help = {
  name: 'rolver'
};

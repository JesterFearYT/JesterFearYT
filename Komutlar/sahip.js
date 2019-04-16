const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField("h!eval", "Kod dener")
    .addField("h!load", "Yeni bir komut yükler")
    .addField("h!reboot", "Botu yeniden başlatır")
    .addField("h!reload", "Bir komutu yeniden başlatır")
    .addField("h!unload", "Bir komutu devre dışı bırakır")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};

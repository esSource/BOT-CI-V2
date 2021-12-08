const Discord = require("discord.js-12");

module.exports = {
  name: "help",
  description: ".",
  execute(message, args) {
    const msg = new Discord.MessageEmbed();
    msg.setTitle("Mostrando uso correcto de los modulos");
    msg.setDescription('$ghelp Google Help \n$qrhelp QRCODE Help\n$tkhelp Tiktok Help\n$toolshelp Tools Help\n$vathelp VoiceAndText Help\n$ythelp YouTube Help')

    message.channel.send(msg);
  },
};

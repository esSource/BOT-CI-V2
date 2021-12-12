const Discord = require("discord.js-12");

module.exports = {
  name: "qrhelp",
  description: ".",
  execute(message, args) {
    const msg = new Discord.MessageEmbed();
    msg.setTitle("Mostrando uso correcto del modulo **QRCODE**");
    msg.addField("$qr", "$qr haliacraft.com");
    msg.addField("Explicacion:", "(prefix = $)(cmd = qr) (argumentos)");
    msg.setFooter("Help Module: ");
    msg.setTimestamp();

    message.channel.send(msg);
  },
};

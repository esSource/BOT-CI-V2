const Discord = require("discord.js-12");

module.exports = {
  name: "vathelp",
  description: ".",
  execute(message, args) {
    const msg = new Discord.MessageEmbed();
    msg.setTitle("Mostrando uso correcto del modulo **VoiceAndText**");
    msg.addField("$vat", "$vat (Mensaje a pasar a voz)");
    msg.addField("Explicacion:", "(prefix = $)(cmd = vat) (argumentos)");
    msg.setFooter("Help Module: ");
    msg.setTimestamp();

    message.channel.send(msg);
  },
};

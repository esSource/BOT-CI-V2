const Discord = require("discord.js-12");

module.exports = {
  name: "ythelp",
  description: ".",
  execute(message, args) {
    const msg = new Discord.MessageEmbed();
    msg.setTitle("Mostrando uso correcto del modulo **YouTube**");
    msg.addField("$yt", "$yt haliacraft network");
    msg.addField("Explicacion:", "(prefix = $)(cmd = yt) (argumentos)");
    msg.setFooter("Help Module: ");
    msg.setTimestamp();

    message.channel.send(msg);
  },
};

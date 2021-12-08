const Discord = require("discord.js-12");

module.exports = {
  name: "ghelp",
  description: ".",
  execute(message, args) {
    const msg = new Discord.MessageEmbed();
    msg.setTitle("Mostrando uso correcto del modulo **YouTube**");
    msg.addField("$gis", "$gis haliacraft network");
    msg.addField("$gs", "$gs haliacraft network");
    msg.addField("$gws", "$gws quien es juan?");
    msg.addField("Explicacion:", "(prefix = $)(cmd = gis/gs/gws) (argumentos)");

    message.channel.send(msg);
  },
};

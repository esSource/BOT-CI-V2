const Discord = require("discord.js-12");

module.exports = {
  name: "tkhelp",
  description: ".",
  execute(message, args) {
    const msg = new Discord.MessageEmbed();
    msg.setTitle("Mostrando uso correcto del modulo **TikTok**");
    msg.addField(
      "$tk",
      "$tk https://www.tiktok.com/@User/video/0000000000000000"
    );
    msg.addField("$tkp", "$tkp TheJesusv");
    msg.addField("Explicacion:", "(prefix = $)(cmd = tkp/tk) (argumentos)");
    msg.setFooter("Help Module: ");
    msg.setTimestamp();

    message.channel.send(msg);
  },
};

const Discord = require("discord.js-12");

module.exports = {
  name: "qr",
  description: ".",
  execute(message, args) {
    if (args == "") {
      return message.channel.send(
        "Necesitas ingresar un nombre de usuario!. | Ayuda de uso: $qrhelp"
      );
    }

    var qr = require("@cola-js/qrcode");
    var qr_png = qr.image(args.join(" "), { type: "png" });
    qr_png.pipe(require("fs").createWriteStream("temp/d1.png"));

    msg = new Discord.MessageEmbed();
    msg.setTitle(args.join(" "));
    msg.attachFiles("temp/d1.png");
    msg.setFooter("QR Module: ");
    msg.setTimestamp();
    message.channel.send(msg);
  },
};

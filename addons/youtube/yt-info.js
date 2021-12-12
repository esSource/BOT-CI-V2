const Discord = require("discord.js-12");
module.exports = {
  name: "yt",
  description: ".",
  async execute(message, args) {
    const youtube = require("@yimura/scraper");
    const yt = new youtube.default();

    if (args == "") {
      return message.channel.send(
        "Necesitas ingresar un argumento!. | Ayuda de uso: $ythelp"
      );
    }

    yt.search(args).then((results) => {
      for (let i = 0; i < 4; i++) {
        msg = new Discord.MessageEmbed();
        msg.setTitle(results.videos[i].title);
        msg.setThumbnail(results.videos[i].thumbnail);
        msg.setDescription(
          "Url del video: " +
            results.videos[i].link +
            "\nFecha de subida: " +
            results.videos[i].uploaded +
            "\nVisitas: " +
            results.videos[i].views +
            "\nDuracion: " +
            results.videos[i].duration_raw +
            " Minutos\nshareLink: " +
            results.videos[i].shareLink +
            "\nID: " +
            results.videos[i].id +
            "\n\nNombre del canal: " +
            results.videos[i].channel.name +
            "\nUrl del canal: " +
            results.videos[i].channel.link +
            "\nCanal verificado: " +
            results.videos[i].channel.verified
        );
        msg.setFooter("YouTube Module ");
        msg.setTimestamp();
        message.channel.send(msg);
      }
    });
  },
};

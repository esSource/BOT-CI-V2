const Discord = require("discord.js-12");

module.exports = {
  name: "tk",
  description: ".",
  execute(message, args) {
    const TikTokScraper = require("tiktok-scraper");
    const colors = require("colors");

    if (args == "") {
      return message.channel.send(
        "Necesitas ingresar un nombre de usuario!. | Ayuda de uso: $tkhelp"
      );
    }
    (async () => {
      try {
        const videoMeta = await TikTokScraper.getVideoMeta(args);
        const msg = new Discord.MessageEmbed();
        if (videoMeta.collector[0].authorMeta.avatar !== "") {
          msg.setThumbnail(videoMeta.collector[0].authorMeta.avatar);
        }
        msg.setTitle(
          videoMeta.collector[0].authorMeta.nickName +
            " | " +
            videoMeta.collector[0].authorMeta.id
        );
        msg.setDescription(
          "**Seguidores:** " +
            videoMeta.collector[0].authorMeta.fans +
            "\n**Siguiendo:** " +
            videoMeta.collector[0].authorMeta.following +
            "\n**Likes:** " +
            videoMeta.collector[0].authorMeta.heart +
            "\n**Biografia:** " +
            videoMeta.collector[0].authorMeta.signature
        );
        msg.addField(
          "**Url directa del video:** ",
          videoMeta.collector[0].videoUrl
        );
        msg.setFooter("Tiktok Module ");
        msg.setTimestamp();
        message.channel.send(msg);
      } catch (error) {
        console.debug(
          colors.yellow(
            "Debug: " +
              error +
              ' "Esto no es un error, solo no se ha encontrado el video!."'
          )
        );
        message.channel.send(
          "Debug: No se ha podido encontrar el video, revisa que el link funcione!."
        );
      }
    })();
  },
};

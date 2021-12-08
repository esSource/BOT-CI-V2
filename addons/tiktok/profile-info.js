const Discord = require("discord.js-12");
module.exports = {
  name: "tkp",
  description: ".",
  async execute(message, args) {
    const TikTokScraper = require("tiktok-scraper");
    const colors = require("colors");

    if (args == '') {
      return message.channel.send('Necesitas ingresar un nombre de usuario!. | Ayuda de uso: $tkhelp');
    }

    (async () => {
      try {
        const user = await TikTokScraper.getUserProfileInfo(args);
        const msg = new Discord.MessageEmbed();
        msg.setTitle(user.user.nickname + " - " + user.user.id);
        if (user.user.avatarThumb !== "") {
          msg.setThumbnail(user.user.avatarThumb);
        }
        msg.setDescription(
          "Seguidores: " +
            user.stats.followerCount +
            "\nSeguidos: " +
            user.stats.followingCount +
            "\nLikes: " +
            user.stats.heart +
            "\nVideos subidos: " +
            user.stats.videoCount
        );
        msg.setFooter("Tiktok Module ");
        msg.setTimestamp();
        message.channel.send(msg);
      } catch (error) {
        console.debug(
          colors.yellow(
            "Debug " +
              error +
              ' "Esto no es un error, solo no se ha encontrado el usuario!"'
          )
        );
        if (error == "Error: User does not exist") {
          message.channel.send(
            "El usuario no se ha encontrado, revisa que este correctamente escrito!."
          );
        } else {
          message.channel.send("Intenta buscarlo de nuevo en minusculas!.");
        }
      }
    })();
  },
};

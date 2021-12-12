const Discord = require("discord.js-12");
const { gismax } = require("../../config.json");
module.exports = {
  name: "gis",
  description: ".",
  execute(message, args) {
    if (args == "") {
      return message.channel.send(
        "Necesitas ingresar un argumento de busqueda!. | Ayuda de uso: $ghelp"
      );
    }

    const gis = require("g-i-s");
    const args2 = args.join(" ");
    const query = args2;

    gis(query, logResults);
    function logResults(error, results) {
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i < gismax; i++) {
          msg = new Discord.MessageEmbed();
          msg.setTitle("Google Image Search (GIS)");
          msg.setDescription(results[i].url);
          msg.setImage(results[i].url);
          msg.setFooter("Google Module: ");
          msg.setTimestamp();
          message.channel.send(msg);
        }
      }
    }
  },
};

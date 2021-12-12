const Discord = require("discord.js-12");
const colors = require("colors");
module.exports = {
  name: "gs",
  description: ".",
  execute(message, args) {
    const gse = require("general-search-engine");
    const args2 = args.join(" ");
    const { gsmax } = require("../../config.json");
    async function main() {
      let petition = await new gse.search()
        .setType("search")
        .setQuery(args2)
        .run();

      for (let i = 0; i < gsmax; i++) {
        try {
          msg = new Discord.MessageEmbed();
          msg.setTitle("Google Search (GS)");
          msg.setDescription(
            "**Titulo: **" +
              petition[i].title +
              "\n**Descripcion:** " +
              petition[i].description +
              "\n**Link:** " +
              petition[i].link
          );
          msg.setFooter("Google Module: ");
          msg.setTimestamp();
          message.channel.send(msg);
        } catch (error) {
          console.debug(
            colors.yellow(
              "Debug: Usando catch en $GS, se ha encontrado una pagina sin nombre...! (Esto no es un error solo se ha salteado una variable.)"
            )
          );
          msg = new Discord.MessageEmbed();
          msg.setTitle("Google Search (GS)");
          msg.setDescription("**Debug: ** No se pudo obtener los datos...");
          msg.setFooter("Google Module: ");
          msg.setTimestamp();
          message.channel.send(msg);
        }
      }
    }

    main();
  },
};

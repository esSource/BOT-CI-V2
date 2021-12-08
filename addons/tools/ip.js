const Discord = require("discord.js-12");

module.exports = {
  name: "ip",
  description: ".",
  execute(message, args) {
    let input = args.join(" ");
    if (input != "") {
      const iplocate = require("node-iplocate");
      const { fastResolver } = require("dns-fast-resolver");
      fastResolver(input, { family: 4 }, (error, address, family) => {
        let ip = address;

        iplocate(ip).then(function (results) {
          const embed = new Discord.MessageEmbed()
            .setTitle("IP: " + input)
            .setColor("GREEN")
            .addField(
              "Coords: ",
              " (Latitud: " +
                results.latitude +
                " **|** Longitud: " +
                results.longitude +
                " ) "
            )
            .addField(
              "Pais: ",
              "" + results.country + " (" + results.country_code + ")"
            )
            .addField("Ciudad: ", "" + results.city)
            .addField("Continente: ", "" + results.continent)
            .addField("Zona horaria: ", "" + results.time_zone)
            .addField(
              "Organizacion: ",
              "" + results.org + " (" + results.asn + ")"
            )
            .setTimestamp()
            .setFooter("Tools Module");
          message.channel.send(embed);
        });
      });
    }
    if (input == "") {
      message.reply(`⚠ has introducido una ip errónea ⚠`);
    }
  },
};

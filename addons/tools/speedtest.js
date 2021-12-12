const Discord = require("discord.js-12");

module.exports = {
  name: "st",
  description: ".",
  async execute(message, args) {
    const { testSpeed } = require("speedtest-promise");

    const result = await testSpeed();

    msg = new Discord.MessageEmbed();
    msg.setTitle("SpeedTest (ST)");
    msg.setDescription(
      "Servidor Seleccionado: " +
        result.server.host +
        "\nSubida: " +
        result.speeds.upload +
        "\nDescarga: " +
        result.speeds.download +
        "\nISP: " +
        result.client.isp +
        "\n\nEste resultado es un aproximado, NodeJS puede crear un cuello de botella hasta en un 40% de la cantidad real!."
    );
    msg.setFooter("Tools Module: ");
    msg.setTimestamp();
    message.channel.send(msg);
  },
};

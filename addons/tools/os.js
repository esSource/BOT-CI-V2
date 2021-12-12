const Discord = require("discord.js-12");

module.exports = {
  name: "os",
  description: ".",
  execute(message, args) {
    const si = require("systeminformation");

    si.cpu()
      .then((data) => {
        //console.dir(data);
        const msg = new Discord.MessageEmbed();
        msg.setTitle(
          data.manufacturer + " " + data.brand + " - " + data.socket
        );
        msg.setDescription(
          "Procesamiento: " +
            data.speedMax +
            "Ghz\nCores: " +
            data.physicalCores +
            "\nVirtualizacion: " +
            data.virtualization +
            "\nModelo: " +
            data.model
        );
        msg.setFooter("Tools Module: ");
        msg.setTimestamp();
        message.channel.send(msg);
      })
      .catch((error) => console.error(error));
    si.osInfo()
      .then((data) => {

        const msg = new Discord.MessageEmbed();
        msg.setTitle(data.platform + " " + data.arch);
        msg.setDescription(
          "Distro: " + data.distro + "\nRelease: " + data.release
        );
        msg.setFooter("Tools Module: ");
        msg.setTimestamp();
        message.channel.send(msg);
      })
      .catch((error) => console.error(error));
  },
};

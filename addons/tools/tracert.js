const Discord = require("discord.js-12");

module.exports = {
  name: "tr",
  description: ".",
  execute(message, args) {
    var Traceroute = require("traceroute-lite");

    var traceroute = new Traceroute("" + args);

    traceroute.on("hop", function (hop) {
      message.channel
        .send("#" + hop.counter + " IP: " + hop.ip + " - " + hop.ms + "ms")
        .then((msg) => msg.delete({ timeout: 2500 }));
    });

    traceroute.on("done", function (err, hops) {
      msg = new Discord.MessageEmbed();
      msg.setTitle("TraceRoute (TR) - " + args);
      for (let i = 0; i < hops.length; i++) {
        msg.addField(
          "#" + hops[i].counter + " IP: " + hops[i].ip,
          hops[i].ms + " ms"
        );
      }
      msg.setFooter("Tools Module: ");
      msg.setTimestamp();
      message.channel.send(msg);
      return 0;
    });

    traceroute.start();
  },
};

const Discord = require("discord.js-12");
module.exports = {
  name: "t",
  description: ".",
  async execute(message, args, client) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const gTTS = require("gtts");
      const text = args.slice(" ").join(" ");
      var gtts = new gTTS("" + text, "es");
      gtts.save("./temp/voice/" + args[0] + ".mp3", function (err, result) {
        if (err) {
          throw new Error(err);
        }

        const dispatcher = connection.play("./temp/voice/" + args[0] + ".mp3");

        dispatcher.on("start", () => {
          console.log("talk is now playing!");
        });

        dispatcher.on("finish", () => {
          console.debug("talk has finished playing!");
          connection.disconnect();
        });

        dispatcher.on("error", console.error);
      });
    }
  },
};

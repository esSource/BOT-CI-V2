const Discord = require("discord.js-12");
module.exports = {
  name: "p",
  description: ".",
  async execute(message, args, client) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      args = args.join(" ");
      const YouTube = require("youtube-sr").default;
      YouTube.search("" + args, { limit: 1, safeSearch: true })
        .then((x) => {
          var YoutubeMp3Downloader = require("youtube-mp3-downloader");

          var YD = new YoutubeMp3Downloader({
            ffmpegPath: "C:/xampp/htdocs/abot/lib/ffmpeg/bin/ffmpeg.exe",
            outputPath: "./temp/voice/",
            youtubeVideoQuality: "lowest",
            queueParallelism: 4,
            progressTimeout: 2000,
            allowWebm: true,
          });

          YD.download("" + x[0].id);

          YD.on("finished", function (err, data) {
            console.debug(JSON.stringify(data));
            const dispatcher = connection.play("" + data.file);

            dispatcher.on("start", () => {
              console.debug("audio is now playing!");
            });

            dispatcher.on("finish", () => {
              console.debug("audio has finished playing!");
              connection.disconnect();
            });

            dispatcher.on("error", console.error);
          });

          YD.on("error", function (error) {
            console.log(error);
          });

          YD.on("progress", function (progress) {});
        })
        .catch(console.error);
    }
  },
};

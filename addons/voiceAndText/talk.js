const Discord = require("discord.js-12");
module.exports = {
    name: "t",
    description: ".",
    async execute(message, args, client) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();


            const dispatcher = connection.play('./temp/voice/voice.mp3');

            dispatcher.on('start', () => {
                console.log('audio.mp3 is now playing!');
            });

            dispatcher.on('finish', () => {
                console.log('audio.mp3 has finished playing!');
                connection.disconnect();
            });

            dispatcher.on('error', console.error);
        }

    },
};
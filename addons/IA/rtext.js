const Discord = require("discord.js-12");
const fetch = require("node-fetch");
const Tesseract = require("tesseract.js");
module.exports = {
    name: "rtext",
    description: ".",
    async execute(message, args) {
        try {
            if (!message.attachments.first().url) return console.log("No attached file found");
            const file = message.attachments.first().url;
            console.dir(message.attachments);

            Tesseract.recognize(
                "" + file,
                "" + args.slice(), { logger: (m) => console.log(m) }
                //'eng', { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                console.log(text);
                message.reply(text);
            });
        } catch (error) {
            message.reply('Debes usar el $rtext con una imagen adjunta y el idioma ejemplo: spa = spanish, eng = english.')
        }
    },
};
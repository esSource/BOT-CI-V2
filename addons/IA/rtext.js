const Discord = require("discord.js-12");
const fetch = require('node-fetch');
const Tesseract = require('tesseract.js');
module.exports = {
    name: "rtext",
    description: ".",
    async execute(message, args) {
        const file = message.attachments.first().url;
        console.dir(message.attachments)
        if (!file) return console.log('No attached file found');

        Tesseract.recognize(
            '' + file,
            'spa', { logger: m => console.log(m) }
            //'eng', { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            console.log(text);
            message.reply(text);
        })
    }
}
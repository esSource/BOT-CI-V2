const Discord = require('discord.js-12');

module.exports = {
    name: 'vat',
    description: '.',
    execute(message, args) {
        const gTTS = require('gtts');
        const text = args.slice(' ').join(' ')
        var gtts = new gTTS(''+text, 'es');
        gtts.save('./temp/voice/'+args[0]+'.mp3', function (err, result) {
          if(err) { throw new Error(err) }
          const msg = new Discord.MessageEmbed();
            msg.setTitle('Texto a Voz');
            msg.attachFiles(['./temp/voice/'+args[0]+'.mp3']);
            msg.setFooter('Voice&Text Module ')
            msg.setTimestamp();
            message.channel.send(msg);
        });
        
    },
};
const Discord = require('discord.js-12');

module.exports = {
  name: 'toolshelp',
  description: '.',
  execute(message, args) {
    
    const msg = new Discord.MessageEmbed();
    msg.setTitle('Mostrando uso correcto del modulo **TOOLS**');
    msg.addField('$ip','$ip haliacraft.com');
    msg.addField('$os','$os (No necesita argumentos)');
    msg.addField('$st','$st (No necesita argumentos)');
    msg.addField('$tr','$tr haliacraft.com/127.0.0.1');
    msg.addField('Explicacion:','(prefix = $)(cmd = ip/os/st/tr) (argumentos)');
    msg.setFooter('Help Module: ')
    msg.setTimestamp();

    message.channel.send(msg);
  },
};
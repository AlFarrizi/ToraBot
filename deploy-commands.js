const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
  try {
    console.log('Started refreshing application commands...');
    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body: commands },
    );
    console.log('Successfully reloaded application commands.');
  } catch (error) {
    console.error(error);
  }
})();

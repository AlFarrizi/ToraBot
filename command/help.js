const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Tampilkan daftar perintah'),
  async execute(interaction) {
    const commands = interaction.client.commands.map(cmd => `• \`/${cmd.data.name}\` - ${cmd.data.description}`).join('\n');
    interaction.reply(`📚 **Daftar Perintah:**\n${commands}`);
  }
};

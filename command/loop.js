const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loop')
    .setDescription('Toggle loop untuk lagu yang sedang diputar'),
  async execute(interaction) {
    interaction.client.loop = !interaction.client.loop;
    interaction.reply(`🔁 Loop ${interaction.client.loop ? 'diaktifkan' : 'dinonaktifkan'}.`);
  }
};

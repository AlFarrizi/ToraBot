const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Tes koneksi bot'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Mengukur ping...', fetchReply: true });
    interaction.editReply(`🏓 Pong! Latensi: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  }
};

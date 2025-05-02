const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Hapus semua lagu dari antrian'),
  async execute(interaction) {
    interaction.client.queue = [];
    interaction.reply('🧹 Antrian dibersihkan!');
  }
};

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nowplaying')
    .setDescription('Lihat lagu yang sedang diputar'),
  async execute(interaction) {
    const current = interaction.client.currentSong;
    if (!current) {
      return interaction.reply('Tidak ada lagu yang sedang diputar.');
    }

    interaction.reply(`🎧 Sedang memutar: **${current.title}**`);
  }
};

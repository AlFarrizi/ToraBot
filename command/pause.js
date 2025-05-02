const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pause lagu yang sedang diputar'),
  async execute(interaction) {
    const player = interaction.client.audioPlayer;
    if (!player) return interaction.reply('Tidak ada player aktif.');

    const success = player.pause();
    if (success) {
      return interaction.reply('⏸️ Lagu dijeda!');
    } else {
      return interaction.reply('Gagal menjeda lagu.');
    }
  }
};

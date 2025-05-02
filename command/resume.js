const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('resume')
    .setDescription('Lanjutkan lagu yang dijeda'),
  async execute(interaction) {
    const player = interaction.client.audioPlayer;
    if (!player) return interaction.reply('Tidak ada player aktif.');

    const success = player.unpause();
    if (success) {
      return interaction.reply('▶️ Lagu dilanjutkan!');
    } else {
      return interaction.reply('Gagal melanjutkan lagu.');
    }
  }
};

const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skip lagu yang sedang diputar'),
  async execute(interaction) {
    const connection = getVoiceConnection(interaction.guild.id);
    if (!connection) {
      return interaction.reply('Tidak ada lagu yang sedang diputar.');
    }

    connection.destroy(); // Mematikan koneksi = skip
    return interaction.reply('⏭️ Lagu dilewati!');
  }
};

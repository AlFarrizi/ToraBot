const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stop lagu dan keluar dari voice channel'),
  async execute(interaction) {
    const connection = getVoiceConnection(interaction.guild.id);
    if (!connection) {
      return interaction.reply('Bot tidak sedang ada di voice channel.');
    }

    connection.destroy();
    return interaction.reply('🛑 Lagu dihentikan dan bot keluar dari voice channel.');
  }
};

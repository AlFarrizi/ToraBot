const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('volume')
    .setDescription('Atur volume bot')
    .addIntegerOption(option => 
      option.setName('level')
        .setDescription('Level volume (0-100)')
        .setRequired(true)),
  async execute(interaction) {
    const level = interaction.options.getInteger('level');
    if (level < 0 || level > 100) {
      return interaction.reply('Volume harus antara 0 hingga 100.');
    }

    if (!interaction.client.audioResource) {
      return interaction.reply('Tidak ada lagu yang sedang diputar.');
    }

    interaction.client.audioResource.volume.setVolume(level / 100);
    interaction.reply(`🔊 Volume diatur ke ${level}%`);
  }
};

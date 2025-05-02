const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shuffle')
    .setDescription('Acak urutan lagu dalam antrian'),
  async execute(interaction) {
    const queue = interaction.client.queue;
    if (!queue || queue.length < 2) return interaction.reply('Tidak cukup lagu untuk diacak.');

    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }

    interaction.reply('🔀 Antrian diacak!');
  }
};

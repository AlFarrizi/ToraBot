const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Lihat antrian lagu saat ini'),
  async execute(interaction) {
    const queue = interaction.client.queue;
    if (!queue || queue.length === 0) {
      return interaction.reply('Tidak ada lagu dalam antrian.');
    }

    const list = queue.map((song, index) => `${index + 1}. ${song.title}`).join('\n');
    interaction.reply(`📃 Antrian Lagu:\n${list}`);
  }
};

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
      if (!interaction.isChatInputCommand()) return;
  
      const command = client.commands.get(interaction.commandName);
      if (!command) return;
  
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Terjadi kesalahan saat eksekusi perintah!', ephemeral: true });
      }
    }
  };
  
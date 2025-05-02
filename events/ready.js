module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      console.log(`Bot login sebagai ${client.user.tag}`);
    }
  };
  
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quiz_me')
    .setDescription('fun trivia game'),
  async execute(interaction) {
    await interaction.reply('Pong!')
  },
}

const { SlashCommandBuilder } = require('discord.js')
const { request } = require('undici')

const verses = [
  'Timothy+2:12',
  'Exodus+21:20-21',
  'Deuteronomy+23:2',
  'Deuteronomy+22:28-29',
  'Leviticus+20:13',
  'Deuteronomy+25:11-12',
  'Ephesians+6:5',
  'Deuteronomy+17:12',
  'Leviticus+20:9',
  'Leviticus+20:27',
  'Mark+12:19',
  'Leviticus+19:27',
  'Exodus+23:23',
  'Proverbs+22:15',
  'Mark+9:43',
  'Leviticus+20:10',
  'Proverbs+22:14',
  'Matthew+5:28',
  'Exodus+22:19',
]

let lastQuote

module.exports = {
  data: new SlashCommandBuilder()
    .setName('inspire')
    .setDescription('Gives a great quote from the "good" book! 🙏'),
  async execute(interaction) {
    // next few lines to not get the same quote twice in a row
    let randomVerse = verses[Math.floor(Math.random() * verses.length)]
    while (randomVerse === lastQuote) {
      randomVerse = verses[Math.floor(Math.random() * verses.length)]
    }
    lastQuote = randomVerse
    const verseResult = await request(`https://bible-api.com/${randomVerse}`)
    const { text } = await verseResult.body.json()
    await interaction.editReply(text)
  },
}

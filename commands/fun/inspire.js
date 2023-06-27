const { SlashCommandBuilder } = require("discord.js")
const { request } = require('undici')

const verses = ['Leviticus+21:18-21']
const randomVerse = verses[Math.floor(Math.random() * verses.length)]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inspire')
        .setDescription('Gives a great quote from the "good" book! 🙏'),
    async execute(interaction) {
        const verseResult = await request(`https://bible-api.com/${randomVerse}`)
		const { text } = await verseResult.body.json()
		await interaction.editReply(text)
    }
}

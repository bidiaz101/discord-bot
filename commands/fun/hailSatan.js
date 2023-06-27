const { SlashCommandBuilder } = require('discord.js')

const tenets = [
  'One should strive to act with compassion and empathy toward all creatures in accordance with reason.',
  'The struggle for justice is an ongoing and necessary pursuit that should prevail over laws and institutions.',
  'One’s body is inviolable, subject to one’s own will alone.',
  "The freedoms of others should be respected, including the freedom to offend. To willfully and unjustly encroach upon the freedoms of another is to forgo one's own.",
  "Beliefs should conform to one's best scientific understanding of the world. One should take care never to distort scientific facts to fit one's beliefs.",
  "People are fallible. If one makes a mistake, one should do one's best to rectify it and resolve any harm that might have been caused.",
  'Every tenet is a guiding principle designed to inspire nobility in action and thought. The spirit of compassion, wisdom, and justice should always prevail over the written or spoken word.',
]

let lastTenet

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hail_satan')
    .setDescription(
      'possesses your soul with the unholy power of the Adversary'
    ),
  async execute(interaction) {
    let randomTenet = tenets[Math.floor(Math.random() * tenets.length)]
    while (randomTenet === lastTenet) {
      randomTenet = tenets[Math.floor(Math.random() * tenets.length)]
    }
    lastTenet = randomTenet
    await interaction.reply(randomTenet)
  },
}

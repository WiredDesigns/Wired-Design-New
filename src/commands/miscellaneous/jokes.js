const JokeAPI = require('sv443-joke-api');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js')

module.exports = {
  
  data: new SlashCommandBuilder()
  .setName("joke")
  .setDescription("Sends joke from an API"),
  async execute(interaction, client) {


    

    if(interaction.channel.name.toLowerCase() === "jokes") {



    const member = interaction.member



    const res = await (await JokeAPI.getJokes()).json({
      safeMode: true
    })

    let fields = []
    if(res.setup && res.delivery) fields.push({ name: res.setup, value: res.delivery });
    else fields.push({ name: res.joke, value: `_ _` })
      const embed = new MessageEmbed()
      .setTitle(`${res.category} joke`)
      .setDescription(`${res.type}\n${!res.delivery?res.setup:""}`)
      .addFields(...fields)
      .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
      .setFooter("Made by Wired Design#1487 with ❤️   Api by: Sv443")
    interaction.reply({embeds: [embed]})

    } else {
      interaction.reply(`You executed the command in the wrong channel, please execute it in #memes`)
    }
    

  }
}

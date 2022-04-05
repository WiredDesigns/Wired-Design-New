const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const ms = require("ms")

module.exports = {
 data: new SlashCommandBuilder()   
 .setName("untimeout")
 .setDescription("Put member in timeout.")
 .addUserOption((option) => option.setName("member").setDescription('Person who you want to put in timeout.').setRequired(true))
 .addStringOption((option) => option.setName("reason").setDescription('Reason to put member in timeout').setRequired(true)),
 async execute(interaction, client) {

  const member = interaction.options.getMember('member')
  let reason = interaction.options.getString('reason') ||null
  

    if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({ content: "You do not have permission to use this command.", ephermal: true });

    const user = interaction.member

    const embed = new MessageEmbed()
      .setTitle(`Timeout Removed for ${member.user.username}#${member.user.discriminator}`) 
      .setDescription(`${member.user.username}#${member.user.discriminator} has been removed from timeout`)
      .addFields(
        {name: `Reason: `, value: `${reason}`}
      )
      .setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)
      .setFooter("Made by Wired Design#1487 with ❤️")

    if(!reason){
      reason = 'No reason provided'
    }
    
    const response = await member.timeout(0, reason)

    if(!response) return interaction.reply({ content: "I am sorry but for some reason I am unable to timeout this member."})
    return interaction.reply({embeds: [embed]})
 }
}

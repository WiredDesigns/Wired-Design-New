const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const ms = require("ms")

module.exports = {
 data: new SlashCommandBuilder()   
 .setName("timeout")
 .setDescription("Put member in timeout.")
 .addUserOption((option) => option.setName("member").setDescription('Person who you want to put in timeout.').setRequired(true))
 .addStringOption((option) => option.setName("time").setDescription('For how much time you want to timeout member').setRequired(true))
 .addStringOption((option) => option.setName("reason").setDescription('Reason to put member in timeout')),
 async execute(interaction, client) {

  const member = interaction.options.getMember('member')
  let reason = interaction.options.getString('reason') || null
  const time = ms(interaction.options.getString('time'))

    if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({ content: "You do not have permission to use this command.", ephermal: true });

    const embed = new MessageEmbed()
      .setTitle(`Timed out ${member.user.username}#${member.user.discriminator}`) 
      .setDescription(`${member.user.username}#${member.user.discriminator} has been timed out`)
      .addFields(
        {name: `Duration: `, value: `${ms(time, {long: true})}`},
        {name: `Reason: `, value: `${reason}`}
      )
      .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
      .setFooter("Made by Wired Design#1487 with ❤️")

    if(!reason){
      reason = 'No reason provided'
    }
    if(!time) return interaction.reply({ content: "Given time is not valid, it is necessary that you provide valid time.", ephermal: true })
    const response = await member.timeout(time, reason)

    if(!response) return interaction.reply({ content: "I am sorry but for some reason I am unable to timeout this member."})
    return interaction.reply({embeds: [embed]})
 }
}

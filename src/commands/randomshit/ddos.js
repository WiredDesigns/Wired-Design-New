const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const ms = require("ms")

module.exports = {
 data: new SlashCommandBuilder()   
 .setName("ddos")
 .setDescription("ddos a member")
 .addUserOption((option) => option.setName("member").setDescription('Person who you want to DDoS.').setRequired(true))
 .addStringOption((option) => option.setName("time").setDescription('For how much time you want to DDoS the user').setRequired(true)),
 async execute(interaction, client) {

  const member = interaction.options.getMember('member')
  const time = ms(interaction.options.getString('time'))

    const user = interaction.member

    const embed = new MessageEmbed()
      .setTitle(`DDoS Request By ${interaction.user.username}#${interaction.user.discriminator}`) 
      .addFields(
        {name: `Target: `, value: `${member.user.username}#${member.user.discriminator}`},
        {name: `Time: `, value: `${ms(time, {long: true})}`})
      .setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)
      .setFooter("Made by Wired Design#1487 with ❤️")


    if(!time) return interaction.reply({ content: "Given time is not valid, it is necessary that you provide valid time.", ephermal: true })
    const response = await user.timeout(time, "An Idiot trying to DDoS a person")

    const badboyembed = new MessageEmbed()
        .setTitle("DO NOT DDoS PERSONS")
        .setDescription("YOU CAN MAKE PEOPLE SAD, SO DONT DO IT AGAIN")

    if(!response) return interaction.reply({ content: "I am sorry but for some reason I am unable to DDoS this user."})
    return interaction.reply({embeds: [embed]}).then(
        interaction.reply({embeds: [badboyembed], ephermal: true})
    )
 }
}

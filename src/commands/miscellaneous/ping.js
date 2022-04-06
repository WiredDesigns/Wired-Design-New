const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Shows the ping of bot'),
    async execute(interaction, client) {

        const member = interaction.member;

        const embed = new MessageEmbed()
            .setTitle(`Agitron's Ping`)
            .setDescription(`🏓 | Ping is \`${client.ws.ping}\` ms.`)
            .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
        await interaction.reply({embeds: [embed]});
    }
}
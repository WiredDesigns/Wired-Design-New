const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Shows the info of a user')
        .addUserOption(option => option.setName("member").setDescription("The memeber whose details you want.")),
    async execute(interaction, client) {
        const member = interaction.options.getMember("member") || interaction.member
        const activities = member.presence?.activities || []

        const focusActivity = activities.find(x => x.assets)
        const embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        
        .setThumbnail(focusActivity ? `https://cdn.discordapp.com/app-assets/${focusActivity.applicationId}/${focusActivity.assets.largeImage}` : member.user.displayAvatarURL())
        .setDescription(activities.map((x, i) => `**${x.type}**: \`${x.name || "None"} : ${x.details || "None"} : ${x.state || "None"}\``).join("\n"))
        .addField("JoinedAt", member.joinedAt.toLocaleString(), true)
        .addField("Account Created At", member.user.createdAt.toLocaleString(), true)
        .addField("Common Information", [
            `Display Name: \`${member.displayName}\``,
            `Pending Member: \`${member.pending ? 'Yes' : 'No'}\``,
            `Booster: \`${member.premiumSince ? 'since ' + member.premiumSince.toLocaleString() : 'Nope'}\``
        ].join("\n"))
        .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

        return interaction.reply({ embeds: [embed] })
	},
    }

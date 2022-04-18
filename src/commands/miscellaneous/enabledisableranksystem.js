const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const guildSettings = require('../../schemas/guildsettings')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ranksystem-toggle')
        .setDescription('Changes the type of Background on their rankcard')
        .addStringOption(option =>
                option.setName('status')
                    .setDescription('Type of Rankcard Background')
                    .setRequired(true)
                    .addChoice('Enabled', 'enabled')
                    .addChoice('Disabled', 'disabled')
                    

            ),
    async execute(interaction, client) {
        const member = interaction.member;
        if(interaction.member.permissions.has("ADMINISTRATOR")) {
            await interaction.reply({content: 'Please Wait...'});
            let user = interaction.user;

            const guildsettingsProfile = await client.guildSettings(interaction.member);
            const choice = interaction.options.getString('status');
            const choiceuppercase = choice.toUpperCase();
            const currenttype = guildsettingsProfile.ranksystemEnabled
            if(choice === 'enabled') {
                if(currenttype === true) {
                    interaction.editReply({content: `You already have ${choice} active for the ranking system ...!`});
                } else {
                    await guildsettingsProfile.findOneAndUpdate({ _id: guildsettingsProfile._id }, { ranksystemEnabled: true }).then(() => {
                        
                        interaction.editReply({content: `You have successfully enabled the rank system`});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            } else if(choice === 'disabled') {
                if(currenttype === false
                    ) {
                    interaction.editReply({content: `You already have ${choice} active for the ranking system ...!`});
                } else {
                    await guildsettingsProfile.findOneAndUpdate({ _id: guildsettingsProfile._id }, { ranksystemEnabled: false }).then(() => {
                        interaction.editReply({content: `You have successfully disabled the rank system`});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            } 
            
        } else {
            interaction.reply({content: 'You do not have permission to use this command!'});
        }
    }



};
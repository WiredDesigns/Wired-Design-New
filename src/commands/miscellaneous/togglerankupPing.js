const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const ranksystemEnabled = require('../../schemas/levelingsystemenabled');
const rankpingToggle = require('../../schemas/rankpingtoggle');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('levelupping-toggle')
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
            await interaction.reply({content: 'Please Wait...'});
            let user = interaction.user;

            const rankpingtoggleProfile = await client.createrankpingToggle(interaction.member);
            const choice = interaction.options.getString('status');
            const choiceuppercase = choice.toUpperCase();
            const currenttype = rankpingtoggleProfile.pingenabled
            if(choice === 'enabled') {
                if(currenttype === true) {
                    interaction.editReply({content: `You already have ${choice} active for the rank up ping ...!`});
                } else {
                    await rankpingToggle.findOneAndUpdate({ _id: rankpingtoggleProfile._id }, { pingenabled: true }).then(() => {
                        
                        interaction.editReply({content: `You have successfully enabled the rank up ping`});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            } else if(choice === 'disabled') {
                if(currenttype === false) {
                    interaction.editReply({content: `You already have ${choice} active for the ranking system ...!`});
                } else {
                    await rankpingToggle.findOneAndUpdate({ _id: rankpingtoggleProfile._id }, { pingenabled: false }).then(() => {
                        interaction.editReply({content: `You have successfully disabled the rank up ping`});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            } 
            
    }



};
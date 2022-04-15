const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const rankcardBackground = require('../../schemas/rankcardbg');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rankcard-type')
        .setDescription('Changes the type of Background on their rankcard')
        .addStringOption(option =>
                option.setName('type')
                    .setDescription('Type of Rankcard Background')
                    .setRequired(true)
                    .addChoice('Color', 'color')
                    .addChoice('Image', 'image')
                    

            ),
    async execute(interaction, client) {
        await interaction.reply({content: 'Please Wait...'});
        let user = interaction.user;
        const member = interaction.member;
        const ranksProfile = await client.createExperience(interaction.member);
        const rankcardbgProfile = await client.createrankcardBg(interaction.member);
        const choice = interaction.options.getString('type');
        const choiceuppercase = choice.toUpperCase();
        const currenttype = rankcardbgProfile.cardbackgroundType;

        if(choice === 'color') {
            if(currenttype === choice.toUpperCase()) {
                interaction.editReply({content: `You already have ${choice} as background type!`});
            } else {
                await rankcardBackground.findOneAndUpdate({ _id: rankcardbgProfile._id }, { cardbackgroundType: choiceuppercase }).then(() => {
                    
                    interaction.editReply({content: `You have changed your rankcard background type to ${choice}!`});
                }).catch(err => {
                    console.log(err);
                });
            }
        } else if(choice === 'image') {
            if(currenttype === choice.toUpperCase()) {
                interaction.editReply({content: `You already have ${choice} as background type!`});
            } else {
                await rankcardBackground.findOneAndUpdate({ _id: rankcardbgProfile._id }, { cardbackgroundType: choiceuppercase }).then(() => {
                    interaction.editReply({content: `You have changed your rankcard background type to ${choice}!`});
                }).catch(err => {
                    console.log(err);
                });
            }
        }
        
    },
};
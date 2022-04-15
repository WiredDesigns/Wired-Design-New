const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const rankcardBackground = require('../../schemas/rankcardbg');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rankcard-color')
        .setDescription('Changes the type of Background on their rankcard')
        .addStringOption(option =>
                option.setName('colorcode')
                    .setDescription('Type of Rankcard Background')
                    .setRequired(true)
                    

            ),
    async execute(interaction, client) {
        await interaction.reply({content: 'Please Wait...'});
        let user = interaction.user;
        const member = interaction.member;
        const ranksProfile = await client.createExperience(interaction.member);
        const rankcardbgProfile = await client.createrankcardBg(interaction.member);
        const colorcode = interaction.options.getString('colorcode');
        const currenttype = rankcardbgProfile.cardbackgroundType;
        const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/g


        // checks if it contains .png or .jpg or .jpeg
        if(regex.test(colorcode)) {
    
            
            await rankcardBackground.findOneAndUpdate({ _id: rankcardbgProfile._id }, {cardbackgroundColor: colorcode }).then(() => {
                interaction.editReply({content: `You have changed your rankcard background color to: ${colorcode} !`});
            }).catch(err => {
                console.log(err);
            });

        } else {
            interaction.editReply({content: `The color code is not valid, you must use a valid color code!\nExample: #000000 or #FFFFFF\nYou can get the color code from here: https://www.w3schools.com/colors/colors_picker.asp`});
        }


    },
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const rankcardBackground = require('../../schemas/rankcardbg');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rankcard-image')
        .setDescription('Changes the type of Background on their rankcard')
        .addStringOption(option =>
                option.setName('url')
                    .setDescription('Type of Rankcard Background')
                    .setRequired(true)
                    

            ),
    async execute(interaction, client) {
        await interaction.reply({content: 'Please Wait...'});
        let user = interaction.user;
        const member = interaction.member;
        const ranksProfile = await client.createExperience(interaction.member);
        const rankcardbgProfile = await client.createrankcardBg(interaction.member);
        const url = interaction.options.getString('url');
        const currenttype = rankcardbgProfile.cardbackgroundType;


        // checks if it contains .png or .jpg or .jpeg
        if(url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg')) {
    
            
            await rankcardBackground.findOneAndUpdate({ _id: rankcardbgProfile._id }, {cardbackgroundImage: url }).then(() => {
                interaction.editReply({content: `You have changed your rankcard background image to: " ${url} "!`});
            }).catch(err => {
                console.log(err);
            });

        } else {
            interaction.editReply({content: `The link is not valid, you must use a valid image link!\nExample: https://i.imgur.com/YQXyYzH.png or https://i.imgur.com/YQXyYzH.jpg or https://i.imgur.com/YQXyYzH.jpeg`});
        }


    },
};
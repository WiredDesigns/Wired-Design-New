const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const guildSettings = require('../../schemas/guildsettings')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rankchannel-set')
        .setDescription('Changes the type of Background on their rankcard')
        .addChannelOption(option => option.setName("channel") .setDescription("Channel to set the rank channel to") .setRequired(true)),
    async execute(interaction, client) {
        const member = interaction.member;
            await interaction.reply({content: 'Please Wait...'});
            let user = interaction.user;

            const guildsettingsProfile = await client.guildSettings(interaction.member);
            const choice = interaction.options.getChannel('channel');
            const choiceToString = choice.name;
            const newChoice = choiceToString.replace("#", "");
            const currenttype = guildsettingsProfile.ranksystemEnabled
            console.log(newChoice);
            if(newChoice === guildsettingsProfile.rankcmdChannel) {
                    interaction.editReply({content: `You already have ${choieToString} active for the ranking system ...!`});
                } else {
                    await guildsettingsProfile.findOneAndUpdate({ _id: guildsettingsProfile._id }, { rankcmdChannel: newChoice }).then(() => {
                        interaction.editReply({content: `You have successfully set the channel to ${guildsettingsProfile.choiceToString}`});
                    }).catch(err => {
                        console.log(err);
                    });
                }
            } 
            
        


};
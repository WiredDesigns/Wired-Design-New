const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Ranks = require('../../schemas/ranks');
const rankcardBackground = require('../../schemas/rankcardbg');
const guildSettings = require('../../schemas/guildsettings')

const canvacord = require('canvacord');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rank')
        .setDescription('Returns Info Based On A User\'s Rank'),
    async execute(interaction, client) {
        const guildsettingsProfile = await client.guildSettings(interaction.member);
        if(guildsettingsProfile.ranksystemEnabled === false) {
            interaction.reply({content: 'The rank system in this guild is disabled!'});
        } else {
        if(guildsettingsProfile.rankcmdChannel === 'none') {
            await interaction.reply({content: 'Please Wait...'});
            let user = interaction.user;
            const member = interaction.member;
            const ranksProfile = await client.createExperience(interaction.member);
            const rankcardbgProfile = await client.createrankcardBg(interaction.member);
            
            let bg = "";
            const type = rankcardbgProfile.cardbackgroundType;
    
            if (type === 'COLOR') {
                bg = rankcardbgProfile.cardbackgroundColor;
            } else if (type === 'IMAGE') {
                bg = rankcardbgProfile.cardbackgroundImage;
            }
            
    
    
            
    
    
    
    
            const rankcard = new canvacord.Rank()
                .setAvatar(user.displayAvatarURL({format: 'jpg'}))
                .setCurrentXP(ranksProfile.xp)
                .setRequiredXP(ranksProfile.xpNeeded)
                .setStatus(member.presence.status)
                .setProgressBar("#007bff", "COLOR")
                .setUsername(user.username)
                .setDiscriminator(user.discriminator)
                .setLevel(ranksProfile.rank)
                .setBackground(type, bg)
                .setRank(1, "RANK", false)
                .renderEmojis(true)
                            
    
    
            rankcard.build()
                .then(data => {
                    const rankcardattatchment = new MessageAttachment(data, 'RankCard.png');
                    interaction.editReply({content: `_ _ `,files: [rankcardattatchment]});
                })
    
    
                
        } else {
            if(interaction.channel.name.toLowerCase() === guildsettingsProfile.rankcmdChannel) {
                
        
                await interaction.reply({content: 'Please Wait...'});
                let user = interaction.user;
                const member = interaction.member;
                const ranksProfile = await client.createExperience(interaction.member);
                const rankcardbgProfile = await client.createrankcardBg(interaction.member);
                
                let bg = "";
                const type = rankcardbgProfile.cardbackgroundType;
        
                if (type === 'COLOR') {
                    bg = rankcardbgProfile.cardbackgroundColor;
                } else if (type === 'IMAGE') {
                    bg = rankcardbgProfile.cardbackgroundImage;
                }
                
        
        
                
        
        
        
        
                const rankcard = new canvacord.Rank()
                    .setAvatar(user.displayAvatarURL({format: 'jpg'}))
                    .setCurrentXP(ranksProfile.xp)
                    .setRequiredXP(ranksProfile.xpNeeded)
                    .setStatus(member.presence.status)
                    .setProgressBar("#007bff", "COLOR")
                    .setUsername(user.username)
                    .setDiscriminator(user.discriminator)
                    .setLevel(ranksProfile.rank)
                    .setBackground(type, bg)
                    .setRank(1, "RANK", false)
                    .renderEmojis(true)
                                
        
        
                rankcard.build()
                    .then(data => {
                        const rankcardattatchment = new MessageAttachment(data, 'RankCard.png');
                        interaction.editReply({content: `_ _ `,files: [rankcardattatchment]});
                    })
        
        
                    
                
                
            } else {
                interaction.reply({content: `You didnt execute it in #${guildsettingsProfile.rankcmdChannel}`});
            }
        }
        
        
    }
    },
};
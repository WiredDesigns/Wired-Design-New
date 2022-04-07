const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

const ms = require("ms")

module.exports = {
 data: new SlashCommandBuilder()   
 .setName("suggest")
 .setDescription("You can suggest")
 .addStringOption((option) => option.setName("suggestion").setDescription('What you want to suggest').setRequired(true)),
 async execute(interaction, client) {
  
  const guild = interaction.guild;
   
   const channelname = "suggestions"
      if(guild.channels.cache.find(c => c.name.toLowerCase() === channelname)){
        const member = interaction.member
        let suggestion = interaction.options.getString('suggestion')
      
        const channel = member.guild.channels.cache.find(channel => channel.name == channelname)
      
        const yes = 0
        const no = 0

        const clickbuttons = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setCustomId("yes")
              .setLabel(`Yes. [${yes}]`)
              .setStyle("SUCCESS"),
            new MessageButton()
              .setCustomId("no")
              .setLabel(`No. [${no}]`)
              .setStyle("DANGER"),
          )
                 

          


        const embed = new MessageEmbed()
          .setTitle(`${interaction.user.username}#${interaction.user.discriminator} has sent a Suggestion`)
          .setDescription(`${suggestion}`)
          .setThumbnail(`${interaction.user.displayAvatarURL()}`)
          .setTimestamp()
          .setFooter("Created by Wired Design with ❤️")
          .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)


  
                  
            const message = await channel.send({ embeds: [embed] , components: [clickbuttons]})
            message.react("👍")
            message.react("👎")




            

        const successmsg = "Sent the suggestion to " + interaction.guild.channels.cache.find(channel => channel.name === channelname).toString();
    


        interaction.reply({content: `${successmsg}`})
      } else {

        const channelcreatemsg = "Create a channel called ``" + channelname + "``" 
        interaction.reply({content: `${channelcreatemsg}`})
      }
 }
}

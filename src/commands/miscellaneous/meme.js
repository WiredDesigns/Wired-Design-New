
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const {MessageEmbed} = require('discord.js')

module.exports = {
  
  data: new SlashCommandBuilder()
  .setName("meme")
  .setDescription("Sends meme from reddit"),
  async execute(interaction, client) {

    

    if(interaction.channel.name.toLowerCase() === "memes") {
      let subreddits = [
        "memes",
        "comedyheaven",
        "dankmemes",
    ]

    const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];

    let res = await axios.default.get(`https://www.reddit.com/r/${subreddit}/random/.json`)

    const member = interaction.member

    if (!res || !res.data || !res.data.length) 
    return interaction.reply({
      content: `An error occured.`,
      ephermal: true,
    });
    res = res.data[0].data.children[0].data;
    const embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setDescription(res.title)
      .setImage(res.url)
      .setURL(`https://reddit.com${res.permalink}`)
      .setFooter(`👍${res.ups} 💬${res.num_comments}`)
      .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
    interaction.reply({embeds: [embed]})
    } else {
      interaction.reply(`You executed the command in the wrong channel, please execute it in #memes`)
    }
    

  }
}
||||||
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Shows the ping of bot'),
    async execute(interation) {
        await interation.reply("Pong!");
    }
}
const {MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.isCommand()) {

        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        try{
            await command.execute(interaction, client);
        } catch(error) {
            console.error(error);
            await interaction.reply({content: `Something went wrong!\n${error.message}`, ephermal: true});
        }
    } else if(interaction.isButton()) {
    }
    }
}
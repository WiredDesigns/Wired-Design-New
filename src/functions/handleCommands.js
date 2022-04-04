const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

// Variables

const clientId = '954119388171231252';
const guildId = '918793821301641218';
const TOKEN = process.env.TOKEN;

module.exports = (client) => {
    client.handleCommands = async (commandsFolders, path) => {
        client.commandArray = []
        for(folder of commandsFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));

            for(const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`);



                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }







        const rest = new REST({ version: '9' }).setToken(TOKEN);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: client.commandArray },
                );
                await rest.put(
                    Routes.applicationCommands(clientId),
                    { body: client.commandArray },

                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    }
}
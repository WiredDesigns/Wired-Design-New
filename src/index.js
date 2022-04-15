const{Collection, Client, Intents} = require("discord.js");
const myIntents = new Intents();
myIntents.add("32767");
const client = new Client({intents: myIntents});

const fs = require('fs');


client.commands = new Collection();

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync('./src/commands');



(async () =>{

    for (file of functions) {
        require(`./functions/${file}`)(client)
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(TOKEN);
    client.dbLogin();
    

})();
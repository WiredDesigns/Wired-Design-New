module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

  
  
    client.user.setPresence({
        activities: [
           {
            name: "/ Commands",
            type: "WATCHING"
           },
        ],
    })
        
        console.log(`I started up as ${client.user.username}#${client.user.discriminator}!`);
    }
}

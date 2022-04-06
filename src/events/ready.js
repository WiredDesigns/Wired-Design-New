module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

  
  
    client.user.setPresence({
        activities: [
           {
            name: "/ commands",
            type: "PLAYING"
           },
        ],
    })
        
        console.log(`I started up as ${client.user.username}#${client.user.discriminator}!`);
    }
}

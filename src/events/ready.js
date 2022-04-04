module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

        const statusArray = [
            {
                type: 'PLAYING',
                content: 'Fortnite',
                status: 'online'
            },
            {
                type: 'LISTENING',
                content: 'Wired Design on Spotify',
                status: 'idle'
            }
        ];

        async function pickPresence() {
            const option = Math.floor(Math.random() * statusArray.length)

            try {
                await client.user.setPresence({
                    activities: [
                       {
                        name: statusArray[option].content,
                        type: statusArray[option].type
                       }

                    ],
                })
            } catch (error) {
                console.log(error);
            }
        }
        const option = Math.floor(Math.random() * statusArray.length)


        setInterval(pickPresence, 8 * 1000);
        
        console.log(`I started up as ${client.user.username}#${client.user.discriminator}!`);
    }
}
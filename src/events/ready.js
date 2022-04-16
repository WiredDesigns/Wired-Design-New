module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

  const Guilds = client.guilds.cache.map(guild => guild.id);
    client.user.setPresence({
        activities: [
           {
            name: `/ Commands`,
            type: "WATCHING"
           },
        ],
    })
        console.log("===============================================================================")
        console.log("")
        console.log("    :::      :::::::: ::::::::::: ::::::::::: :::::::::   ::::::::  ::::    ::: ")
        console.log("  :+: :+:   :+:    :+:    :+:         :+:     :+:    :+: :+:    :+: :+:+:   :+: ")
        console.log(" +:+   +:+  +:+           +:+         +:+     +:+    +:+ +:+    +:+ :+:+:+  +:+")
        console.log("+#++:++#++: :#:           +#+         +#+     +#++:++#:  +#+    +:+ +#+ +:+ +#+ ")
        console.log("+#+     +#+ +#+   +#+#    +#+         +#+     +#+    +#+ +#+    +#+ +#+  +#+#+#")
        console.log("#+#     #+# #+#    #+#    #+#         #+#     #+#    #+# #+#    #+# #+#   #+#+#")
        console.log("###     ###  ######## ###########     ###     ###    ###  ########  ###    ####")
        console.log("")
        console.log("===============================================================================")
        console.log(`I started up as ${client.user.username}#${client.user.discriminator}!`);
    }
}

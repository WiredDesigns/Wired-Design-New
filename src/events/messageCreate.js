const Ranks = require('../schemas/ranks');
const ranksystemenabledProfile = require('../schemas/levelingsystemenabled');
const rankpingToggle = require('../schemas/rankpingtoggle');
 
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {


        
        const ranksProfile = await client.createExperience(message.member);
        const rankpingtoggleProfile = await client.createrankpingToggle(message.member);
        const ranksystemenabledProfile = await client.ranksystemEnabled(message.member); 
        
        if(ranksystemenabledProfile.enabled === false) {
            return;
        } else {   

        const xpNeeded = ranksProfile.xpNeeded;
        
        const xp = Math.floor(Math.random() * 29) + 1;
        

        await Ranks.findOneAndUpdate({ _id: ranksProfile._id }, { xp: ranksProfile.xp += xp }).catch(err => {
           
        });

        if(ranksProfile.xp >= xpNeeded) 
            {
             const newRank = +1;
             let currentRank = newRank;
             let currentXpNeeded = xpNeeded+20
             if(ranksProfile.rank === currentRank && ranksProfile.xp > currentXpNeeded) {
                 return;
             } else {
                
                let newXpNeeded = ranksProfile.xpNeeded + 328;

                blacklistId = "960989885186068480"
                


                await Ranks.findOneAndUpdate({ _id: ranksProfile._id }, { rank: ranksProfile.rank += newRank });
                await Ranks.findOneAndUpdate({ _id: ranksProfile._id }, { xpNeeded: ranksProfile.xpNeeded += newXpNeeded });
                if(ranksProfile.memberId === blacklistId) {
                    return;
                } else {
                    if(rankpingtoggleProfile.pingenabled === true) {
                        await message.channel.send(`${message.member} You've leveled up to ${ranksProfile.rank}!`);
                    } else if (rankpingtoggleProfile.pingenabled === false) {
                        await message.channel.send(`${message.author.tag} You've leveled up to ${ranksProfile.rank}!`);
                    }
             }

        }

        }
        }
}
}

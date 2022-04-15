const rankpingToggle = require('../schemas/rankpingtoggle');
const mongoose = require('mongoose');

module.exports = (client) => {
    client.createrankpingToggle = async (member) => {
        let rankpingtoggleProfile = await rankpingToggle.findOne({ memberId: member.id, guildId: member.guild.id })
        if (rankpingtoggleProfile) {
            return rankpingtoggleProfile;
        } else {
            rankpingtoggleProfile = await new rankpingToggle({
                _id: mongoose.Types.ObjectId(),
                guildId: member.guild.id,
                memberId: member.id,
            });
            await rankpingtoggleProfile.save().catch(err => console.log(err));
            return rankpingtoggleProfile;
        }
    };
};
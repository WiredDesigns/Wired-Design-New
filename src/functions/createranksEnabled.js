const ranksystemEnabled = require('../schemas/levelingsystemenabled');
const mongoose = require('mongoose');
const ranksystemenabled = require('../schemas/levelingsystemenabled');

module.exports = (client) => {
    client.ranksystemEnabled = async (member) => {
        let ranksystemenabledProfile = await ranksystemEnabled.findOne({ guildId: member.guild.id })
        if (ranksystemenabledProfile) {
            return ranksystemenabledProfile;
        } else {
            ranksystemenabledProfile = await new ranksystemEnabled({
                _id: mongoose.Types.ObjectId(),
                guildId: member.guild.id,
            });
            await ranksystemenabledProfile.save().catch(err => console.log(err));
            return ranksystemenabledProfile;
        }
    };
};
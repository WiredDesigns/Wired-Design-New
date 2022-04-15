const Ranks = require('../schemas/ranks');
const mongoose = require('mongoose');
const ranks = require('../schemas/ranks');

module.exports = (client) => {
    client.createExperience = async (member) => {
        let ranksProfile = await Ranks.findOne({ memberId: member.id, guildId: member.guild.id })
        if (ranksProfile) {
            return ranksProfile;
        } else {
            ranksProfile = await new Ranks({
                _id: mongoose.Types.ObjectId(),
                guildId: member.guild.id,
                memberId: member.id,
            });
            await ranksProfile.save().catch(err => console.log(err));
            return ranksProfile;
        }
    };
};
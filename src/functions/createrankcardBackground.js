const rankcardBackground = require('../schemas/rankcardbg');
const mongoose = require('mongoose');
const rankcardbackground = require('../schemas/rankcardbg');

module.exports = (client) => {
    client.createrankcardBg = async (member) => {
        let rankcardbgProfile = await rankcardBackground.findOne({ memberId: member.id, guildId: member.guild.id })
        if (rankcardbgProfile) {
            return rankcardbgProfile;
        } else {
            rankcardbgProfile = await new rankcardBackground({
                _id: mongoose.Types.ObjectId(),
                guildId: member.guild.id,
                memberId: member.id,
            });
            await rankcardbgProfile.save().catch(err => console.log(err));
            return rankcardbgProfile;
        }
    };
};
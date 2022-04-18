const guildSettings = require('../schemas/guildsettings');
const mongoose = require('mongoose');


module.exports = (client) => {
    client.guildSettings = async (member) => {
        let guildsettingsProfile = await guildSettings.findOne({ guildId: member.guild.id })
        if (guildsettingsProfile) {
            return guildsettingsProfile;
        } else {
            guildsettingsProfile = await new guildSettings({
                _id: mongoose.Types.ObjectId(),
                guildId: member.guild.id,
            });
            await guildsettingsProfile.save().catch(err => console.log(err));
            return guildsettingsProfile;
        }
    };
};
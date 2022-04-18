const mongoose = require('mongoose');
const  guildsettingsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    rankcmdChannel: {type: String, default: 'none'},
    ranksystemEnabled: { type: Boolean, default: true },
});

module.exports = mongoose.model('guildsettings', guildsettingsSchema, "guildsettings");
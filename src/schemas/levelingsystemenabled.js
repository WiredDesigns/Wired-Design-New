const mongoose = require('mongoose');
const  ranksystemtoggleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    enabled: { type: Boolean, default: true },
});

module.exports = mongoose.model('ranksystemtoggle', ranksystemtoggleSchema, 'ranksystemtoggle');
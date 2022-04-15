const mongoose = require('mongoose');
const  ranksSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    memberId: String,
    rank: { type: Number, default: 0 },
    
    xpNeeded: { type: Number, default: 100},
    xp: { type: Number, default: 0 }
});

module.exports = mongoose.model('Ranks', ranksSchema, 'ranks');
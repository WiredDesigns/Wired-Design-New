const mongoose = require('mongoose');
const  rankpingtoggleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    memberId: String,
    pingenabled: {type: Boolean, default: true},
});

module.exports = mongoose.model('RankPingToggle', rankpingtoggleSchema, 'rankpingtoggle');
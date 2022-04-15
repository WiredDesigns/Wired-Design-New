const mongoose = require('mongoose');
const  rankcardbackgroundSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    memberId: String,
    cardbackgroundType: { type: String, default: "COLOR" },
    cardbackgroundColor: {type: String, default: "#000000"},
    cardbackgroundImage: {type: String, default: "https://wallpaperaccess.com/full/767351.jpg"}
});

module.exports = mongoose.model('RankCardBackground', rankcardbackgroundSchema, 'rankcardbackground');
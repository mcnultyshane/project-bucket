const { Schema, model } = require("mongoose");

const teamSchema = new Schema ({
    friend: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    }

})

const Team = model("Team", teamSchema)

module.exports = Team;

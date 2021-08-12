const { Schema, model } = require("mongoose");

const campaignSchema = new Schema({
    name: {
        type: String
    },
    location: {

    },
    needs: {
        type: [String],
    },
    donations: {
        type: Number
    }

})

const Campaign = model("Campaign", campaignSchema)

module.exports = Campaign;
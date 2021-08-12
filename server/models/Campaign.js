const { Schema, model } = require("mongoose");


const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    location: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Location'
        }
    ],
    updates: {
        type: [String]
    },

    donations: {
        type: Number,
        min: 0.99
    },
    teamMembers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    ]

})

const Campaign = model("Campaign", campaignSchema)

module.exports = Campaign;
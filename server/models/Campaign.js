const { Schema, model } = require("mongoose");


const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    contributers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    updates: [
        {
            type: String,
            ref: 'Update'
        }
    ],
    dateCreated: {
        type: Date,
        default: Date.now
      },
    // donations: {
    //     type: Number,
    //     min: 0.99
    // },

})

const Campaign = model("Campaign", campaignSchema)

module.exports = Campaign;
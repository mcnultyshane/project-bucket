const { Schema, model } = require("mongoose");


const campaignSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
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
    dateCompleted: {
        type: Date,

      },

    isComplete: {
        type: Boolean,
        default: false
      },

    location: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Location'
        },
      ],
    fundsNeeded: {
        type: Number,
        min: 0.99
    },
    donations: {
        type: Number,
        min: 0.00
    },

})

const Campaign = model("Campaign", campaignSchema)

module.exports = Campaign;
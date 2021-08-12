const { Schema, model } = require('mongoose');

const campaignSchema = require('./Campaign');

const bucketSchema = new Schema ({
    name: {
        type: String,
    }
})


const BucketList = model("BucketList", bucketSchema)

module.export = BucketList;
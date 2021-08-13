const { Schema, model } = require("mongoose");


const bucketListSchema = new Schema({

  campaigns: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Campaign',
    },
  ],
});

const BucketList = model("BucketList", bucketListSchema);

module.exports = BucketList;

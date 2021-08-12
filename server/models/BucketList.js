const { Schema, model } = require("mongoose");


const bucketListSchema = new Schema({

  buckets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bucket',
    },
  ],
});

const BucketList = model("BucketList", bucketListSchema);

module.exports = BucketList;

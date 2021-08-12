const { Schema, model } = require("mongoose");


const bucketSchema = new Schema({
  name: {
    type: String,
  },
  campaign: [
    {
      type: Schema.Type.ObjectId,
      ref: Campaign,
    },
  ],
});

const BucketList = model("BucketList", bucketSchema);

module.export = BucketList;

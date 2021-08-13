const { Schema, model } = require("mongoose");


const updateSchema = new Schema({
    content: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
      },
    // lastUpdate: {
    //     type: String,

    //   },

})

const Update = model("Update", updateSchema)

module.export = Update;
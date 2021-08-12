const { Schema, model } = require("mongoose");

const geoSchema = new Schema ({
    name: {
        type: String,
    },
    location: {
        type: String,
    
    }
    // location: {
    //     type: {   
    //         type: String,
    //         enum: ['Point'],
    // // location.type must be "Point"
    //         required: true
    //         // default: "Point"
    //     },
    //     coordinates: {
    //         type: [Number],
    //         // the type is an array of numbers
    //         index: "2dsphere",
    //         required: true
    //     }
    //   },
})

module.exports = geoSchema;
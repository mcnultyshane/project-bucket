const { Schema, model } = require("mongoose");

const locationSchema = new Schema ({
    address: {
        type: String,
    },
    coordinates: {
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
const Location = model("Location", locationSchema)


module.exports = Location;
const { Schema, model } = require('mongoose');

const bucketSchema = new Schema ({
    name: {
        type: String,
    }
})
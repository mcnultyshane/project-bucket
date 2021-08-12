const {
    Schema,
    model
} = require("mongoose");
const bcrypt = require("bcrypt");
const geoSchema = require("./Location");
const bucketSchema = require("./BucketList")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    bucketList: [bucketSchema],

    location: [geoSchema],
});

// custom method to compare and validate password for logging in
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called 'bucketList' with the Bucket List associated with that user
userSchema.virtual("bucketList").get(function() {
    return this.bucketList;
}) 



const User = model("User", userSchema);

module.exports = User;
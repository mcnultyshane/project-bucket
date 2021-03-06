const {
    Schema,
    model
} = require("mongoose");
const bcrypt = require("bcrypt");
const location = require("./Location");


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
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    avatar: {
        type: String
    },
    bucketList: [
        {
        type: Schema.Types.ObjectId,
        ref: "Campaign"
    },
],

    location: [location.schema],

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


const User = model("User", userSchema);

module.exports = User;
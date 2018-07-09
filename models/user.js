// Require mongoose
const mongoose = require("mongoose");
// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
//construct a schema
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required.",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    }
});

UserSchema.pre("save", function (next) {
    const user = this;
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });

    } else {
        return next();
    };

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

// Or this...
// module.exports = mongoose.model("User", UserSchema);

//<form action="/submit" method="post">
//  <input type="text" name="username" placeholder="username">
    //    <input type="password" name="password" placeholder="password">
    //      <input type="text" name="email" placeholder="email">
        //        <input type="submit">
    // </form>
})
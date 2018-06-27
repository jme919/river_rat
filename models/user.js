// Require mongoose
const mongoose = require("mongoose");
// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;
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
    email:{
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    }
    

});

const User = mongoose.model("User", UserSchema);

module.exports = User;

//<form action="/submit" method="post">
  //  <input type="text" name="username" placeholder="username">
    //    <input type="password" name="password" placeholder="password">
      //      <input type="text" name="email" placeholder="email">
        //        <input type="submit">
    //</form>
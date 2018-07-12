// Require mongoose
const mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the commentsSchema with the schema object
const  commentsSchema = new Schema({
    //This is the username who posted the comment
    username: String,
    
    // The park that is associated with the comment
    parkId: {
        type: Number,
        
    },
    // date is just a string
    date: {
        type: Date,
        default: Date.now
    },
    // text of the comment
    comment: String
});

// Create the comments model using the commentsSchema
const  Comments = mongoose.model("Comments", commentsSchema);

// Export the Note model
module.exports = Comments;
// Require mongoose
const mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the commentsSchema with the schema object
const  commentsSchema = new Schema({
    
    // The park that is associated with the comment
    parkId: {
        type: Number,
        
    },

    username:{
        type:String,
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
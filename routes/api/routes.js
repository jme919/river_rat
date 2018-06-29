// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function (req, res) {
    // Create a new user using req.body
    User.create(req.body)
        .then(function (dbUser) {
            // If saved successfully, send the the new User document to the client
            res.json(dbUser);
        })
        .catch(function (err) {
            // If an error occurs, send the error to the client
            res.json(err);
        });
});

app.post("/comment", function (req, res){

    Comments.create(req.body)
        .then(function(dbComments){
            res.json(dbComments);

        })
        .catch(function(err){
            res.json(err);
        });
});
const axios = require("axios");
const router = require("express").Router();
const passport = require('passport');
require('../config/passport')(passport);
const Comment = require("../models/comments");
const express = require("express");
const db = require("../models");

router.get("/data", (req, res) => {
  axios
    .get("https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02035000&period=PT4H&parameterCd=00060,00065,00010,63680&siteStatus=all")
    //need to pass res.json(results.data<insert additional parmeters here>)
    .then((results) => 
      // console.log(results.data)
      res.json(results.data)
    )
    .catch(err => res.status(422).json(err));
});

router.get("/parks", (req, res) => {
  axios
    .get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&callback=initMap")
    .then((results) => console.log(results.data))
})

router.get("/api/park/:id", (req, res)=>{
  const object = {
    park: req.params.id
  }
  res.json(object)
})

router.post("/parkpage", (req, res) => {
  const newComment = new Comment({
    username: req.body.username,
    parkId: req.body.parkId,
    comment: req.body.comment
  });

  newComment.save(function (err){
    if (err) {
      console.log(err);
      res.status(500);
      return
    }
    res.json({status: "okay"})
  })
})

router.get("/comments/:id", (req, res) =>{
  const parkId = req.params.id;
  console.log(parkId)
  db.Comments.find({parkId :parkId})
  .then(result=>{
    console.log("!!!! Here it is",result);
    res.json(result);
  })
  .catch(err=>res.status(500).json(err));
})
// router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
//   const token = getToken(req.headers);
//   if (token) {
//     Book.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   } else {
//     return res.status(403).send({ success: false, msg: 'Unauthorized.' });
//   }
// });

// router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
//   const token = getToken(req.headers);
//   if (token) {
//     Book.find(function (err, books) {
//       if (err) return next(err);
//       res.json(books);
//     });
//   } else {
//     return res.status(403).send({ success: false, msg: 'Unauthorized.' });
//   }
// });

// getToken = function (headers) {
//   if (headers && headers.authorization) {
//     const parted = headers.authorization.split(' ');
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

module.exports = router;